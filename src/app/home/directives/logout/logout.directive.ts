import { Directive, Renderer2, Input, Output, EventEmitter, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfimModalMessageComponent } from 'src/app/core/components/confim-modal-message/confim-modal-message.component';
import { LocalStorageService } from 'src/app/core/services/localStorage/local-storage.service';

@Directive({
  selector: '[appLogout]'
})
export class LogoutDirective implements AfterViewInit {

  click: any;
  touchend: any;
  mouseenter: any;
  mouseleave: any;

  @Input('isShowing') isShowing!: boolean;

  @Output('updateIsShowing') updateIsShowing = new EventEmitter<boolean>();
  @Output('updateIsFirstTap') updateIsFirstTap = new EventEmitter<boolean>();

  constructor(
    private readonly renderer: Renderer2,
    private readonly element: ElementRef,
    private readonly dialogService: DialogService,
    private readonly localStorageService: LocalStorageService,
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
      () => {this.selectButton(this.isShowing ? 'redirect': 'show')}
    );
    this.touchend = this.renderer.listen(
      el, 'touchend', 
      () => {this.selectButton(this.isShowing ? 'redirect': 'show')}
    );
    this.mouseenter = this.renderer.listen(
      el, 'mouseenter', 
      () => {this.selectButton('show')}
    );
    this.mouseleave = this.renderer.listen(
      el, 'mouseleave', 
      () => {this.selectButton('hide')}
    );
    // Si es tablet eliminar listener de click
    if(window.innerWidth <= 1025) {
      this.click();
      return;
    }
    // Si es pc o lap eliminar listener de touchend
    this.touchend();
  }

  selectButton(state: 'hide' | 'show' | 'redirect') {
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
    if(state === 'redirect') {
      const ref = this.dialogService.open(ConfimModalMessageComponent, {
        data: {
          message: '¿Cerrar sesión?'
        }
      });

      ref.onClose.subscribe(({confirmed}) => {
        if(!confirmed) {
          return;
        }
        this.localStorageService.clear();
        this.changeRoute('login')
      })
    }
  }

  changeRoute(path: string) {
    this.router.navigate([path]);
  }
}
