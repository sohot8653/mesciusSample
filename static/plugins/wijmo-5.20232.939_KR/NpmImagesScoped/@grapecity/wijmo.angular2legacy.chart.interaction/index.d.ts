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
* {@module wijmo.angular2legacy.chart.interaction}
* Contains Angular 2 components for the <b>wijmo.chart.interaction</b> module.
*
* <b>wijmo.angular2legacy.chart.interaction</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjInteraction from 'wijmo/wijmo.angular2legacy.chart.interaction';
* import * as wjChart from 'wijmo/wijmo.angular2legacy.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjInteraction.WjFlexChartRangeSelector, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-range-selector&gt;&lt;/wj-flex-chart-range-selector&gt;
*           &lt;wj-flex-chart-series [binding]="'y'"&gt;&lt;/wj-flex-chart-series&gt;
*       &lt;/wj-flex-chart&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
/**
 *
 */
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ElementRef, Injector, OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from '@grapecity/wijmo.angular2legacy.directivebase';
import * as wjcChartInteraction from '@grapecity/wijmo.chart.interaction';
declare var wjFlexChartRangeSelectorMeta: IWjComponentMeta;
export { wjFlexChartRangeSelectorMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.interaction.RangeSelector} class.
 *
 * The <b>wj-flex-chart-range-selector</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2legacy.chart.WjFlexChart}
 *  or {@link wijmo.angular2legacy.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-range-selector</b> component to add <b>RangeSelector</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartRangeSelector</b> component is derived from the <b>RangeSelector</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartRangeSelector extends wjcChartInteraction.RangeSelector implements OnInit, OnDestroy, AfterViewInit {
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
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is ''.
     */
    wjProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeChanged</b> Wijmo event name.
     */
    rangeChangedNg: EventEmitter<any>;
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
}
declare var wjFlexChartGesturesMeta: IWjComponentMeta;
export { wjFlexChartGesturesMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.interaction.ChartGestures} class.
 *
 * The <b>wj-flex-chart-gestures</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2legacy.chart.WjFlexChart}
 *  or {@link wijmo.angular2legacy.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-gestures</b> component to add <b>ChartGestures</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartGestures</b> component is derived from the <b>ChartGestures</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartGestures extends wjcChartInteraction.ChartGestures implements OnInit, OnDestroy, AfterViewInit {
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
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is ''.
     */
    wjProperty: string;
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
}
export declare class WjChartInteractionModule {
}
