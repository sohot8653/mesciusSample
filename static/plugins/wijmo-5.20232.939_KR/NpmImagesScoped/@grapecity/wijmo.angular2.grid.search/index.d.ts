/*!
    *
    * Wijmo Library 5.20232.939
    * https://developer.mescius.com/wijmo
    *
    * Copyright(c) MESCIUS inc. All rights reserved.
    *
    * Licensed under the End-User License Agreement For MESCIUS Wijmo Software.
    * us.sales@mescius.com
    * https://developer.mescius.com/wijmo/licensing
    *
    */
/**
* {@module wijmo.angular2.grid.search}
* Contains Angular 2 components for the <b>wijmo.grid.search</b> module.
*
* <b>wijmo.angular2.grid.search</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
*
*
*/
/**
 *
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ElementRef, Injector, OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from '@grapecity/wijmo.angular2.directivebase';
import * as wjcGridSearch from '@grapecity/wijmo.grid.search';
declare var wjFlexGridSearchMeta: IWjComponentMeta;
export { wjFlexGridSearchMeta };
/**
 * Angular 2 component for the {@link wijmo.grid.search.FlexGridSearch} control.
 *
 * Use the <b>wj-flex-grid-search</b> component to add <b>FlexGridSearch</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexGridSearch</b> component is derived from the <b>FlexGridSearch</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexGridSearch extends wjcGridSearch.FlexGridSearch implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexGridSearch, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexGridSearch, "wj-flex-grid-search", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "text": "text"; "delay": "delay"; "searchAllColumns": "searchAllColumns"; "placeholder": "placeholder"; "cssMatch": "cssMatch"; "grid": "grid"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; }, never, never, false, never>;
}
export declare class WjGridSearchModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjGridSearchModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjGridSearchModule, [typeof WjFlexGridSearch], [typeof ɵngcc1.CommonModule], [typeof WjFlexGridSearch]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjGridSearchModule>;
}
