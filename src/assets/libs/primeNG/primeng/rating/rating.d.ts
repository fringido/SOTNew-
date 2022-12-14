import { ChangeDetectorRef, EventEmitter, OnInit, QueryList, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
export declare const RATING_VALUE_ACCESSOR: any;
export declare class Rating implements OnInit, ControlValueAccessor {
    private cd;
    templates: QueryList<any>;
    onIconTemplate: TemplateRef<any>;
    offIconTemplate: TemplateRef<any>;
    cancelIconTemplate: TemplateRef<any>;
    isCustomCancelIcon: boolean;
    index: number;
    disabled: boolean;
    readonly: boolean;
    stars: number;
    cancel: boolean;
    iconOnClass: string;
    iconOnStyle: any;
    iconOffClass: string;
    iconOffStyle: any;
    iconCancelClass: string;
    iconCancelStyle: any;
    onRate: EventEmitter<any>;
    onCancel: EventEmitter<any>;
    constructor(cd: ChangeDetectorRef);
    value: number;
    onModelChange: Function;
    onModelTouched: Function;
    starsArray: number[];
    ngOnInit(): void;
    ngAfterContentInit(): void;
    getIconTemplate(i: number): TemplateRef<any>;
    rate(event: any, i: number): void;
    clear(event: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    get isCustomIcon(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Rating, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Rating, "p-rating", never, { "isCustomCancelIcon": "isCustomCancelIcon"; "index": "index"; "disabled": "disabled"; "readonly": "readonly"; "stars": "stars"; "cancel": "cancel"; "iconOnClass": "iconOnClass"; "iconOnStyle": "iconOnStyle"; "iconOffClass": "iconOffClass"; "iconOffStyle": "iconOffStyle"; "iconCancelClass": "iconCancelClass"; "iconCancelStyle": "iconCancelStyle"; }, { "onRate": "onRate"; "onCancel": "onCancel"; }, ["templates"], never, false>;
}
export declare class RatingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RatingModule, [typeof Rating], [typeof i1.CommonModule], [typeof Rating, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RatingModule>;
}
