import { Component, OnInit } from '@angular/core';
import { RoomStatusEnum } from './enums/room-status.enum';
@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.scss']
})
export class RoomTypesComponent implements OnInit {

  statusRoom = RoomStatusEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
