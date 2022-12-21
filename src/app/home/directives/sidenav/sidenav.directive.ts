import { Directive, AfterViewInit, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Directive({
  selector: '[appSidenav]'
})
export class SidenavDirective implements OnInit {

  constructor(
    private readonly drawer: MatDrawer
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.drawer.toggle();
    }, 500)
  }
}
