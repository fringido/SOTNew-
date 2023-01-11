import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { gql } from 'apollo-angular';
import { DialogService } from 'primeng/dynamicdialog';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomService } from 'src/app/room-types/services/room/room.service';

@Component({
  selector: 'app-limpieza-habitacion',
  templateUrl: './limpieza-habitacion.component.html',
  styleUrls: ['./limpieza-habitacion.component.scss']
})
export class LimpiezaHabitacionComponent implements OnInit, OnDestroy {

  display = true;
  sucia = true
  medioSucia = false;
  retoque = false;
  limpiezaSeleccionada = false;
  
  camaristasDisponibles: any[]= [];
  camaristasSeleccionados: any[]= [];

  arregloTemporalDisponibles: any[] = [];
  arregloTemporalSeleccionados: any[] = [];

  // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom!: any;
  selectedRoomSubs!: Subscription;  
  
  constructor(
    private readonly router: Router,
    private readonly dialogService: DialogService,
    private readonly roomService: RoomService,
  ) {
  }


  filterText: FormControl = new FormControl("");

  ngOnInit(): void {

    this.selectedRoomSubs = this.roomService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room;
      if(!this.selectedRoom) {
        return;
      }
      if(
        this.selectedRoom.status === RoomStatusEnum.EN_SUPERVISION ||
        this.selectedRoom.status === RoomStatusEnum.SUPERVISION_MANTENIMIENTO
      ) {
        this.medioSucia = false;
        this.sucia = false;
        this.retoque = true;
      }
    });
    this.search()

    this.camaristasDisponibles = [
      {nombre: 'Nombre1', id: 1},
      {nombre: 'Nombre2', id: 2},
      {nombre: 'Nombre3', id: 3},
      {nombre: 'Nombre4', id: 4},
      {nombre: 'Nombre5', id: 5},
      {nombre: 'Nombre6', id: 6}
    ]
    this.arregloTemporalDisponibles = this.camaristasDisponibles;
  }

  ngOnDestroy(): void {
    this.selectedRoomSubs.unsubscribe();
  }

  search() {
    this.filterText.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((v) => {
        if(!v) {
          this.arregloTemporalDisponibles = this.camaristasDisponibles;
          this.arregloTemporalSeleccionados = this.camaristasSeleccionados;
          return;
        }
        this.arregloTemporalDisponibles = [...this.camaristasDisponibles];
        this.arregloTemporalSeleccionados = [...this.camaristasSeleccionados];
        this.arregloTemporalDisponibles = this.arregloTemporalDisponibles.filter(
          camarista => camarista.nombre.toLowerCase().includes(v.toLowerCase()))
        this.arregloTemporalSeleccionados  = this.arregloTemporalSeleccionados.filter(
          camarista => camarista.nombre.toLowerCase().includes(v.toLowerCase()))
      });
  }

  seleccionar(idEmpleado: number) {
    let empleado = this.camaristasDisponibles.findIndex((empelado)=> empelado.id === idEmpleado)
    this.camaristasSeleccionados.push(this.camaristasDisponibles[empleado])
    if (empleado > -1) {
      this.camaristasDisponibles.splice(empleado, 1);
    }
    this.camaristasSeleccionados =this.camaristasSeleccionados.sort(function( a, b ) {
    a = a.nombre.toLowerCase();
    b = b.nombre.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
    })
    this.filterText.reset();
  }

  deseleccionar(idEmpleado: number) {
    let empleado = this.camaristasSeleccionados.findIndex((empelado)=> empelado.id === idEmpleado)
    this.camaristasDisponibles.push(this.camaristasSeleccionados[empleado])
    if (empleado > -1) {
      this.camaristasSeleccionados.splice(empleado, 1);
    }
    this.camaristasDisponibles = this.camaristasDisponibles.sort(function( a, b ) {
    a = a.nombre.toLowerCase();
    b = b.nombre.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
    })
    this.filterText.reset();

  }

  
  seleccionarLimpieza(tipoLimpieza: number) {
    setTimeout(() => {
      this.limpiezaSeleccionada = true;
    }, 300)
  }
  
  deseleccionarLimpieza(tipoLimpieza: number) {
    setTimeout(() => {
      this.limpiezaSeleccionada = false;
    }, 100)
  }
  
  regresar() {
    this.router.navigate(['/hotel']);
  }

  aceptar() {
    this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'Camarista asignado'
      }
    })
    this.regresar();
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.EN_LIMPIEZA
    });
  }

}
