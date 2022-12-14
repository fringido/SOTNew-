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

  click: any;
  touchend: any;
  mouseenter: any;
  mouseleave: any;

  @Input('type') type!: MenuButtons;
  @Input('isShowing') isShowing!: boolean;

  @Output('updateIsShowing') updateIsShowing = new EventEmitter<boolean>();
  @Output('updateIsFirstTap') updateIsFirstTap = new EventEmitter<boolean>();


  constructor(
    private readonly renderer: Renderer2,
    private readonly element: ElementRef,
    private readonly router: Router
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setListeners();
  }

  ngAfterViewInit(): void {
    this.setListeners();
  }

  setListeners() {
    this.click?.();
    this.touchend?.();
    this.mouseenter?.();
    this.mouseleave?.();

    const el = this.element.nativeElement;
    this.click = this.renderer.listen(
      el, 'click', 
      () => {this.selectButton(this.type, this.isShowing ? 'redirect': 'show')}
    );
    this.touchend = this.renderer.listen(
      el, 'touchend', 
      () => {this.selectButton(this.type, this.isShowing ? 'redirect': 'show')}
    );
    this.mouseenter = this.renderer.listen(
      el, 'mouseenter', 
      () => {this.selectButton(this.type, 'show')}
    );
    this.mouseleave = this.renderer.listen(
      el, 'mouseleave', 
      () => {this.selectButton(this.type, 'hide')}
    );
    // Si es tablet eliminar listener de click
    if(window.innerWidth <= 1025) {
      this.click();
      return;
    }
    // Si es pc o lap eliminar listener de touchend
    this.touchend();
  }

  selectButton(menuItem: MenuButtons, state: 'hide' | 'show' | 'redirect') {
    if (state === 'show') {
      this.updateIsShowing.next(true);
      this.updateIsFirstTap.next(true);
      return;
    }
    if (state === 'hide') {
      this.updateIsShowing.next(false);
      this.updateIsFirstTap.next(false);
      return
    }
    const options: { [key in MenuButtons]: () => void } = {
      BAR: () => {
          this.changeRoute('/cocina-bar/bar');
          return;
      },
      CHECADOR: () => {
          this.changeRoute('/cocina-bar');
          return;
      },
      COCINA: () => {
          this.changeRoute('/cocina-bar/cocina');
          return;
      },
    }
    return options[menuItem] ? options[menuItem]() : console.error('Opcion no implementada');
  }

  changeRoute(path: string) {
    this.router.navigate([path]);
  }
}
