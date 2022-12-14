import { ElementRef, Renderer2, ChangeDetectorRef, AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/tooltip";
export declare class MegaMenu implements AfterContentInit {
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    model: MegaMenuItem[];
    style: any;
    styleClass: string;
    orientation: string;
    autoZIndex: boolean;
    baseZIndex: number;
    templates: QueryList<any>;
    activeItem: any;
    documentClickListener: any;
    startTemplate: TemplateRef<any>;
    endTemplate: TemplateRef<any>;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    onCategoryMouseEnter(event: any, menuitem: MegaMenuItem): void;
    onCategoryClick(event: any, item: MenuItem | MegaMenuItem): void;
    itemClick(event: MouseEvent, item: MenuItem | MegaMenuItem): void;
    getColumnClass(menuitem: MegaMenuItem): any;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MegaMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MegaMenu, "p-megaMenu", never, { "model": "model"; "style": "style"; "styleClass": "styleClass"; "orientation": "orientation"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; }, {}, ["templates"], ["*"], false>;
}
export declare class MegaMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MegaMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MegaMenuModule, [typeof MegaMenu], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.RippleModule, typeof i4.TooltipModule], [typeof MegaMenu, typeof i2.RouterModule, typeof i4.TooltipModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MegaMenuModule>;
}
