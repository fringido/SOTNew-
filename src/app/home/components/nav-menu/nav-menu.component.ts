import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  isExpanded!: boolean;

  fecha = new Date();
  time = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  ToggleNav() {
    this.isExpanded = !this.isExpanded;

  }

}
