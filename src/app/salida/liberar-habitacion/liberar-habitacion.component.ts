import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomService } from 'src/app/room-types/services/room/room.service';

@Component({
  selector: 'app-liberar-habitacion',
  templateUrl: './liberar-habitacion.component.html',
  styleUrls: ['./liberar-habitacion.component.scss']
})
export class LiberarHabitacionComponent implements OnInit {

  display = true;

  seleccionRazon = false;

  detalleSelected?: {name: string, text: string};
  detalleSelectedIndex!: number;

  liberacion: {conDetalle: boolean} = {conDetalle: false};

  readonly detalles = [
    {name: 'exitosa', text: 'Liberación Exitosa'},
    {name: 'supervision', text: 'Hubo detalle de supervisión'},
    {name: 'ventilacion', text: 'Hubo detalle de ventilación'},
    {name: 'pormenor', text: 'Hubo detalle pormenor'},
  ]

  @ViewChildren('detallesRef') detallesRef!: QueryList<ElementRef<HTMLDivElement>>;
  form!:FormGroup;

    // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
    selectedRoom!: any;
    selectedRoomSubs!: Subscription;

  constructor(
    private readonly renderer: Renderer2,
    private readonly fb: FormBuilder,
    private readonly location: Location,
    private readonly dialogService: DialogService,
    private readonly roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      motivo:['', Validators.required]
    });

    this.selectedRoomSubs = this.roomService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room;
    });
  }

  selectDetalle(detalle: {name: string, text: string}, index: number) {
    if(this.detalleSelectedIndex === index) {
      return this.unselectDetalles();
    }
    this.unselectDetalles();
    this.liberacion.conDetalle = true;
    if(detalle.name === 'exitosa') {
      this.form.reset();
      this.seleccionRazon = true;
      this.liberacion.conDetalle = false;
    }
    this.detalleSelectedIndex = index;
    this.detalleSelected = detalle;
    const detalleToSelect = this.detallesRef.toArray().find((el) => el.nativeElement.id === 'detalle_' + index);
    this.renderer.addClass(detalleToSelect?.nativeElement, 'concepto-lib-touple-assigned');
    this.renderer.removeClass(detalleToSelect?.nativeElement, 'concepto-lib-touple');
  }

  unselectDetalles() {
    this.seleccionRazon = false;
    this.detalleSelectedIndex = -1;
    this.detallesRef.toArray().forEach((el) => {
      this.renderer.addClass(el.nativeElement, 'concepto-lib-touple');
      this.renderer.removeClass(el.nativeElement, 'concepto-lib-touple-assigned');
    });
  }

  enableAceptarButton() {
    return this.seleccionRazon || (this.detalleSelected?.name !== 'exitosa' && this.form.valid);  
  }

  salir() {
    this.location.back();
  }
  
  aceptar() {
    console.log(this.form.value);
    
    this.salir();
    this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'Liberación exitosa'
      }
    });
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.LIBRE
    });
  }

}
