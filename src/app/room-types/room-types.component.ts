import { Component, OnInit } from '@angular/core';
import { RoomStatusEnum } from './enums/room-status.enum';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Options } from 'masonry-layout';

@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.scss']
})
export class RoomTypesComponent implements OnInit {

  readonly roomsLayoutOptions: NgxMasonryOptions = {
    gutter: 0,
    columnWidth: 200,
    horizontalOrder: true,
    fitWidth: true,
  }

  readonly updateMasonryLayout: Options = {

  }

  statusRoom = RoomStatusEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
