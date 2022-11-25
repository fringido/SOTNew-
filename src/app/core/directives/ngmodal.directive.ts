import { Directive, OnInit } from '@angular/core';
import {Dialog} from 'primeng/dialog';

//TODO: directiva de ejemplo para asginar opciones a modales, tendrá cambios en un futuro
@Directive({
  selector: '[appNgmodal]'
})
export class NgmodalDirective implements OnInit {

  constructor(public ref: Dialog) {
  }
  ngOnInit(): void {

    this.ref.closable = false;
  }
}
