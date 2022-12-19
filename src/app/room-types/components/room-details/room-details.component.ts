import { Component, HostListener, OnInit, Renderer2} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { take } from 'rxjs';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { SidebarService } from '../../../sidebar/services/sidebar/sidebar.service';
import { RoomStatusEnum } from '../../enums/room-status.enum';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  readonly AvailableRoomStatus = RoomStatusEnum;
  display: boolean = false;
  public isCollapsed = {
    data: false,
    details: false,
    roomService: false
  };

  selectedRoom!: any;

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly renderer: Renderer2,
    private readonly router: Router,
    public dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.sidebarService.selectedRoom$.pipe(take(1)).subscribe((room) => {
      this.selectedRoom = room
    });
  }


  @HostListener('document:keydown', ['$event']) 
  onEscapeHandler(event: KeyboardEvent) {
    if(event.key !== 'Escape') {
      return;
    }
    if(this.router.routerState.snapshot.url === '/hotel') {
      this.exit();
    }
  }

  exit() {
    this.sidebarService.setSidebarState('home')
  }

  entrada() {
    const ref = this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'SE HA DADO ENTRADA DE FORMA EXITOSA'
      },
    });
  }

  openRentaHabitacion() {
    this.router.navigate(['hotel', 'rentaHabitacion'])
  }

  openRentaExtraHabitacion() {
    this.router.navigate(['hotel', 'rentaHabitacion', 'pagoExtraRenta']);
  }
  openCobroPendiente() {
    this.router.navigate(['hotel', 'rentaHabitacion', 'cobroPendiente']);
  }

}
