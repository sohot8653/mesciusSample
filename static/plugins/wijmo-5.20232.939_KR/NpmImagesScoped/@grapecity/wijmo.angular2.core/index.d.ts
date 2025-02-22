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
* {@module wijmo.angular2.core}
* Contains Angular 2 components for the <b>wijmo</b> module.
*
* <b>wijmo.angular2.core</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjCore from 'wijmo/wijmo.angular2.core';
* &nbsp;
* &#64;Component({
*     directives: [wjCore.WjTooltip],
*     template: '&lt;span [wjTooltip]="'Greeting'"&gt;Hello&lt;/span&gt;',
*     selector: 'my-cmp',
* })
* export class MyCmp {
* }</pre>
*
*/
/**
 *
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ComponentFactoryResolver, ElementRef, Injector, OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjDirectiveMeta } from '@grapecity/wijmo.angular2.directivebase';
import * as wjcCore from '@grapecity/wijmo';
declare var wjTooltipMeta: IWjDirectiveMeta;
export { wjTooltipMeta };
/**
    * Angular 2 directive for the {@link Tooltip} class.
    *
    * Use the **wjTooltip** directive to add tooltips to elements on the page.
    * The wjTooltip directive supports HTML content, smart positioning, and touch.
    *
    * The wjTooltip directive is specified as an attribute added to the
    * element that the tooltip applies to. The parameter value is the tooltip
    * text or the id of an element that contains the text.
    *
    * You can also specify the following additional properties for the tooltip:
    * - wjTooltipPosition - represents the {@link Tooltip.position} property.
    * For example:
    * ```html
    * <p [wjTooltip]="'Just a string'">
    *     Paragraph with a string tooltip.
    * </p>
    * <p [wjTooltip]="'#fineprint'" [wjTooltipPosition]="'Left'">
    *     Paragraph with a tooltip defined as an element.
    * </p>
    * ...
    * <div id="fineprint" style="display:none">
    *   <h3>Important Note</h3>
    *   <p>
    *     Data for the current quarter is estimated
    *     by pro-rating etc.</p>
    * </div>
    * ```
    */
export declare class WjTooltip implements OnInit, OnDestroy, AfterViewInit {
    private static _toolTip;
    private _toolTipText;
    private _toolTipPosition;
    private _elRef;
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
    wjTooltip: string;
    wjTooltipPosition: wjcCore.PopupPosition;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjTooltip, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<WjTooltip, "[wjTooltip]", ["wjTooltip"], { "wjTooltip": "wjTooltip"; "wjTooltipPosition": "wjTooltipPosition"; }, { "initialized": "initialized"; }, never, never, false, never>;
}
/**
 * Angular component to dynamically load other components.
 *
 * Use the <b>wj-component-loader</b> component to create and load an instance of an arbitrary component class
 * in place of wj-component-loader. You can also pass a set of property values to the instantiated component.
 *
 * Note that any component class which is expected to be instantiated using the <b>wj-component-loader</b>
 * component must be declared in the <b>entryComponents</b> array of the application @NgModule decorator.
 *
 * The example below demonstrates FlexGrid with columns dynamically generated form the column definitions
 * array in the data model. Column definition can optionally contain a reference to a component class
 * that should be used as a cell template. The <b>wj-component-loader</b> component is used to
 * instantiate such a component in the cell template.
 * <pre><b>HTML</b>
 * &nbsp;
 * &lt;wj-flex-grid #flex [itemsSource]="data"&gt;
 *  &lt;wj-flex-grid-column *ngFor="let col of columns"
 * 	        [header]="col.header"
 * 	        [binding]="col.binding"
 * 	        [format]="col.format"
 * 	        [width]="col.width"&gt;
 * 	    &lt;ng-template *ngIf="col.cellTemplate"
 *               wjFlexGridCellTemplate [cellType]="'Cell'"
 *               let-cell="cell"&gt;
 *          &lt;wj-component-loader [component]="col.cellTemplate"
 *                  [properties]="{item: cell.item}"&gt;
 *          &lt;/wj-component-loader&gt;
 * 	    &lt;/ng-template&gt;
 * 	&lt;/wj-flex-grid-column&gt;
 * &lt;/wj-flex-grid&gt;
 * &nbsp;
 * &nbsp;
 * <b>TypeScript</b>
 * &nbsp;
 * &#64;Component({
 * ...
 * })
 * export class AppCmp {
 *     columns: any[];
 *
 *     constructor() {
 *         this.columns = [
 *             { header: 'Product', binding: 'product' },
 *             { header: 'Revenue', binding: 'amount', format: 'n0' },
 *             {
 *                 header: 'Expense',
                   binding: 'amount2',
                   cellTemplate: ExpenseCellCmp
 *             }
 *         ];
 *     }
 * }
 *
 * &#64;Component({
 * ...
 * })
 * export class ExpenseCellCmp {
 *     item: any;
 * }
 * &nbsp;
 * &#64;NgModule({
 *     imports: [CommonModule, WjGridModule],
 *     declarations: [AppCmp],
 *     entryComponents: [ExpenseCellCmp]
 * })</pre>
  */
export declare class WjComponentLoader implements OnInit {
    private _cmpResolver;
    private _elementRef;
    private _component;
    private _properties;
    private _cmpRef;
    private _isInit;
    private _anchor;
    propertiesChange: EventEmitter<{}>;
    constructor(/*@Inject(DynamicComponentLoader) private _dcl: DynamicComponentLoader,*/ _cmpResolver: ComponentFactoryResolver, _elementRef: ElementRef);
    /**
     * Gets or sets a component class reference that should be instantiated by the
     * <b>wj-component-loader</b> component.
     *
     * Note that any component class which is expected to be instantiated using the <b>wj-component-loader</b>
     * component must be declared in the <b>entryComponents</b> array of the application @NgModule decorator.
     */
    component: any;
    /**
     * Gets or sets an object with property name-value pairs which is used to initialize the
     * instantiated component.
     */
    properties: Object;
    ngOnInit(): void;
    private _createComponent;
    private _updateProperties;
    private _addPropListener;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjComponentLoader, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjComponentLoader, "wj-component-loader", never, { "component": "component"; "properties": "properties"; }, { "propertiesChange": "propertiesChange"; }, never, never, false, never>;
}
export declare class WjCoreModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjCoreModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjCoreModule, [typeof WjTooltip, typeof WjComponentLoader], [typeof ɵngcc1.CommonModule], [typeof WjTooltip, typeof WjComponentLoader]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjCoreModule>;
}
