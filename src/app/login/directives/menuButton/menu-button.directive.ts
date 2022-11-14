import { Directive } from '@angular/core';
import {
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
  AfterViewInit
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuButtons } from '../../models/menu-buttons.enum';

@Directive({
  selector: '[appMenuButton]'
})
export class MenuButtonDirective implements AfterViewInit {

  @Input('type') type!: MenuButtons;
  @Input('isShowing') isShowing!: boolean;

  @Output('updateIsShowing') updateIsShowing = new EventEmitter<boolean>();
  @Output('updateIsFirstTap') updateIsFirstTap = new EventEmitter<boolean>();


  constructor(
    private readonly renderer: Renderer2,
    private readonly element: ElementRef,
    private readonly router: Router
  ) { }

  ngAfterViewInit(): void {
    const el = this.element.nativeElement;
    console.log(this.isShowing)
    const click = this.renderer.listen(
      el, 'click', 
      () => {this.selectButton(this.type, this.isShowing ? 3: 2)}
    );
    const tap = this.renderer.listen(
      el, 'tap', 
      () => {this.selectButton(this.type, this.isShowing ? 3: 2)}
    );
    const mouseenter = this.renderer.listen(
      el, 'mouseenter', 
      () => {this.selectButton(this.type, 2)}
    );
    const mouseleave = this.renderer.listen(
      el, 'mouseleave', 
      () => {this.selectButton(this.type, 1)}
    );
    // Si es tablet eliminar listener de click
    if(window.innerWidth <= 1025) {
      click();
      return;
    }
    // Si es pc o lap eliminar listener de tap
    tap();
  }

  selectButton(menuItem: MenuButtons, state: 1 | 2 | 3) {
    // TODO: no funciona tap de redireccion
    if (state === 2) {
      this.updateIsShowing.next(true);
      this.updateIsFirstTap.next(true);
    }
    if (state === 1) {
      this.updateIsShowing.next(false);
      this.updateIsFirstTap.next(false);
    }
    const options: { [key in MenuButtons]: () => void } = {
      BAR: () => {
        if (state === 3) {
          this.router.navigate(['/cocina-bar']);
          return;
        }
      },
      CHECADOR: () => {
        if (state === 3) {
          this.router.navigate(['/cocina-bar']);
          return;
        }
      },
      COCINA: () => {
        if (state === 3) {
          this.router.navigate(['/cocina-bar']);
          return;
        }
      },
    }
    return options[menuItem] ? options[menuItem]() : options[menuItem];
  }
}
