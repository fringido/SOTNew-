import { Location } from '@angular/common';
import { Component, OnInit, QueryList, Renderer2, ViewChildren, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomService } from 'src/app/room-types/services/room/room.service';

@Component({
  selector: 'app-mandar-supervisar-habitacion',
  templateUrl: './mandar-supervisar-habitacion.component.html',
  styleUrls: ['./mandar-supervisar-habitacion.component.scss']
})
export class MandarSupervisarHabitacionComponent implements OnInit {

  display = true;

  isSupervisorSeleccionado: boolean = false;
  @ViewChildren('supervisoresRef') supervisoresRef!: QueryList<ElementRef<HTMLDivElement>>;

  filterText: FormControl = new FormControl("");

  supervisores: any = [
    {nombres: 'Luis Mario', apellidoPaterno: 'Hernandez', apellidoMaterno: 'Garcia', id: 1},
    {nombres: 'uno', apellidoPaterno: 'dos', apellidoMaterno: 'tres', id: 2},
    {nombres: 'cuatro', apellidoPaterno: 'cinco', apellidoMaterno: 'seis', id: 3},
    {nombres: 'siete', apellidoPaterno: 'ocho', apellidoMaterno: 'nueve', id: 4},
    {nombres: 'diez', apellidoPaterno: 'once', apellidoMaterno: 'doce', id: 5},
  ];
  supervisoresAll: any;

  // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom!: any;
  selectedRoomSubs!: Subscription;

  constructor(
    private readonly renderer: Renderer2,
    private readonly location: Location,
    private readonly dialogService: DialogService,
    private readonly roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.supervisoresAll = this.supervisores;
    this.search();

    this.selectedRoomSubs = this.roomService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room;
    });
  }

  selectSupervisor(supervisor: any, index: number) {
    this.unselectSupervisores();
    const supervisorSeleccionado = this.supervisoresRef.toArray().find((el) => el.nativeElement.id === 'supervisor_' + index)?.nativeElement;
    console.log(supervisorSeleccionado);
    
    this.renderer.addClass(supervisorSeleccionado, 'box_componente_selected');
    this.renderer.removeClass(supervisorSeleccionado, 'box_componente');
    this.isSupervisorSeleccionado = true;
  }

  unselectSupervisores() {
    this.isSupervisorSeleccionado = false;
    this.supervisoresRef.toArray().forEach(el => {
      this.renderer.removeClass(el.nativeElement, 'box_componente_selected');
      this.renderer.addClass(el.nativeElement, 'box_componente');
    })
  }

    //busca los roles
    search() {
      this.filterText = new FormControl("");
      this.filterText.valueChanges
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe((v) => {
          this.unselectSupervisores();          
          if (v) {
            this.supervisores = this.supervisoresAll.filter((supervisor:any) => {
              console.log({supervisor: (supervisor.nombres + supervisor.apellidoPaterno + supervisor.apellidoMaterno).toLowerCase()});
              console.log({value: this.filterText.value.toLowerCase()});
              
              
              return (supervisor.nombres + supervisor.apellidoPaterno + supervisor.apellidoMaterno).toLowerCase().includes(this.filterText.value.toLowerCase())
            }
            );
          } else {
            this.supervisores = this.supervisoresAll;
          }
        });
    }

  regresar() {
    this.location.back();
  }

  aceptar() {
    this.location.back();
    this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'Supervisor Asignado'
      }
    });
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.EN_SUPERVISION
    });
  }

}
