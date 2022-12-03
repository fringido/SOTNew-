import { ElementRef, OnDestroy, EventEmitter, Renderer2, NgZone, ChangeDetectorRef, QueryList, TemplateRef, AfterContentInit, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { PrimeNGConfig } from 'primeng/api';
import { Confirmation } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/button";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/api";
export declare class ConfirmDialog implements AfterContentInit, OnInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    private confirmationService;
    zone: NgZone;
    private cd;
    config: PrimeNGConfig;
    header: string;
    icon: string;
    message: string;
    style: any;
    styleClass: string;
    maskStyleClass: string;
    acceptIcon: string;
    acceptLabel: string;
    acceptAriaLabel: string;
    acceptVisible: boolean;
    rejectIcon: string;
    rejectLabel: string;
    rejectAriaLabel: string;
    rejectVisible: boolean;
    acceptButtonStyleClass: string;
    rejectButtonStyleClass: string;
    closeOnEscape: boolean;
    dismissableMask: boolean;
    blockScroll: boolean;
    rtl: boolean;
    closable: boolean;
    appendTo: any;
    key: string;
    autoZIndex: boolean;
    baseZIndex: number;
    transitionOptions: string;
    focusTrap: boolean;
    defaultFocus: string;
    breakpoints: any;
    get visible(): any;
    set visible(value: any);
    get position(): string;
    set position(value: string);
    onHide: EventEmitter<any>;
    footer: any;
    contentViewChild: ElementRef;
    templates: QueryList<any>;
    ngAfterContentInit(): void;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    confirmation: Confirmation;
    _visible: boolean;
    maskVisible: boolean;
    documentEscapeListener: any;
    container: HTMLDivElement;
    wrapper: HTMLElement;
    contentContainer: HTMLDivElement;
    subscription: Subscription;
    maskClickListener: Function;
    preWidth: number;
    _position: string;
    transformOptions: any;
    styleElement: any;
    id: string;
    confirmationOptions: Confirmation;
    translationSubscription: Subscription;
    constructor(el: ElementRef, renderer: Renderer2, confirmationService: ConfirmationService, zone: NgZone, cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngOnInit(): void;
    option(name: string): any;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    getElementToFocus(): any;
    appendContainer(): void;
    restoreAppend(): void;
    enableModality(): void;
    disableModality(): void;
    createStyle(): void;
    close(event: Event): void;
    hide(type?: any): void;
    moveOnTop(): void;
    getMaskClass(): {
        'p-dialog-mask p-component-overlay': boolean;
        'p-dialog-mask-scrollblocker': boolean;
    };
    getPositionClass(): string;
    bindGlobalListeners(): void;
    unbindGlobalListeners(): void;
    unbindMaskClickListener(): void;
    onOverlayHide(): void;
    destroyStyle(): void;
    ngOnDestroy(): void;
    accept(): void;
    reject(): void;
    get acceptButtonLabel(): string;
    get rejectButtonLabel(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmDialog, "p-confirmDialog", never, { "header": "header"; "icon": "icon"; "message": "message"; "style": "style"; "styleClass": "styleClass"; "maskStyleClass": "maskStyleClass"; "acceptIcon": "acceptIcon"; "acceptLabel": "acceptLabel"; "acceptAriaLabel": "acceptAriaLabel"; "acceptVisible": "acceptVisible"; "rejectIcon": "rejectIcon"; "rejectLabel": "rejectLabel"; "rejectAriaLabel": "rejectAriaLabel"; "rejectVisible": "rejectVisible"; "acceptButtonStyleClass": "acceptButtonStyleClass"; "rejectButtonStyleClass": "rejectButtonStyleClass"; "closeOnEscape": "closeOnEscape"; "dismissableMask": "dismissableMask"; "blockScroll": "blockScroll"; "rtl": "rtl"; "closable": "closable"; "appendTo": "appendTo"; "key": "key"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "transitionOptions": "transitionOptions"; "focusTrap": "focusTrap"; "defaultFocus": "defaultFocus"; "breakpoints": "breakpoints"; "visible": "visible"; "position": "position"; }, { "onHide": "onHide"; }, ["footer", "templates"], ["p-footer"], false>;
}
export declare class ConfirmDialogModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ConfirmDialogModule, [typeof ConfirmDialog], [typeof i1.CommonModule, typeof i2.ButtonModule, typeof i3.RippleModule], [typeof ConfirmDialog, typeof i2.ButtonModule, typeof i4.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ConfirmDialogModule>;
}
