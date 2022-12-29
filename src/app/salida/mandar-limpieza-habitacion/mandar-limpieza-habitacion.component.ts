import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { RoomService } from 'src/app/room-types/services/room/room.service';

@Component({
  selector: 'app-mandar-limpieza-habitacion',
  templateUrl: './mandar-limpieza-habitacion.component.html',
  styleUrls: ['./mandar-limpieza-habitacion.component.scss']
})
export class MandarLimpiezaHabitacionComponent implements OnInit, OnDestroy{
  display = true;

  selectedRoom!: any;
  selectedRoomSubs!: Subscription;
  constructor(
    private readonly dialogService: DialogService,
    private readonly roomService: RoomService,
    private readonly location: Location
  ) { }

  ngOnInit(): void {
    this.selectedRoomSubs = this.roomService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room;
    });

  }

  ngOnDestroy(): void {
    this.selectedRoomSubs.unsubscribe();
  }

  

  enviarLimpieza() {
    const ref = this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'Se ha terminado la renta de la habitación'
      }
    });
    this.location.back();
  }

  enviarLimpiezaSucia() {
    this.enviarLimpieza();
    this.roomService.finalizarRentaSucia(this.selectedRoom.roomNumber).then((room) => {
      this.roomService.updateSelectedRoom(room);
    });
  }
  
  enviarLimpiezaMediaSucia() {
    this.enviarLimpieza();
    this.roomService.finalizarRentaMediaSucia(this.selectedRoom.roomNumber).then((room) => {
      this.roomService.updateSelectedRoom(room);
    });
  }

}
