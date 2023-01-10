import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { SessionStorageService } from 'src/app/core/services/sessionStorage/session-storage.service';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomService } from 'src/app/room-types/services/room/room.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  visible = true
  form!:FormGroup

  @Output('confirmed') confirmed = new EventEmitter<boolean>();

  selectedRoom!: any;
  selectedRoomSubs!: Subscription;

  constructor(
    private readonly fb: FormBuilder,
    private readonly roomService: RoomService,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
  ngOnInit(): void {
    this.selectedRoomSubs = this.roomService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room
    });
  }

  aceptar() {
    this.confirmed.emit(true);
  }
  
  cancelar() {
    this.confirmed.emit(false);
  }
}
