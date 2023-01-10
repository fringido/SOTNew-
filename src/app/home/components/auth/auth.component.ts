import { Component, OnInit } from '@angular/core';
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

  prevRouteData!: {prevRoute: string, data: unknown, successMessage: string};

  selectedRoom!: any;
  selectedRoomSubs!: Subscription;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly dialogService: DialogService,
    private readonly sessionStorageService: SessionStorageService,
    private readonly roomService: RoomService
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
    this.prevRouteData = this.sessionStorageService.getItem('authState') as {prevRoute: string, data: unknown, successMessage: string};
    console.log(this.prevRouteData);
    
  }

  aceptar() {
    if(this.form.invalid) {
      return;
    }
    const ref = this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: this.prevRouteData.successMessage
      }
    });

    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.LIBRE
    });
    this.router.navigate(['hotel']);
  }

  cancelar() {
    if(!this.prevRouteData.prevRoute?.length) {
      return this.router.navigate(['hotel'])
    }
    return this.router.navigate(['hotel', this.prevRouteData.prevRoute])
  }

}
