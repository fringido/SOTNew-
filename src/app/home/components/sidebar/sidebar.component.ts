import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // TODO: Hacer que funcione la animacion
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close(){

  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
