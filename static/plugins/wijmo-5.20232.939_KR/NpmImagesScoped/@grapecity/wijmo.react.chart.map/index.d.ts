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
 * {@module wijmo.react.chart.map}
 * Contains React components for the <b>wijmo.chart.map</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.map.FlexMap} control.
 *
 * The <b>flex-map</b> component may contain
 * the following child components:
 * {@link wijmo.react.chart.FlexChartLegend}
 * , {@link wijmo.react.chart.map.ScatterMapLayer}
 * , {@link wijmo.react.chart.map.GeoMapLayer}
 * and {@link wijmo.react.chart.map.GeoGridLayer}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.FlexMap} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexMap extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        binding?: any;
        footer?: any;
        header?: any;
        selectionMode?: any;
        palette?: any;
        plotMargin?: any;
        footerStyle?: any;
        headerStyle?: any;
        tooltipContent?: any;
        itemsSource?: any;
        center?: any;
        zoom?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        rendering?: any;
        rendered?: any;
        selectionChanged?: any;
        itemsSourceChanging?: any;
        itemsSourceChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    private _setExtra;
}
/**
 * React component for the {@link wijmo.chart.map.ScatterMapLayer} class.
 *
 * The <b>scatter-map-layer</b> component should be contained in
 * a {@link wijmo.react.chart.map.FlexMap} component.
 *
 * The <b>scatter-map-layer</b> component may contain
 * a {@link wijmo.react.chart.map.ColorScale} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.ScatterMapLayer} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class ScatterMapLayer extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        style?: any;
        itemsSource?: any;
        url?: any;
        symbolSize?: any;
        symbolMinSize?: any;
        symbolMaxSize?: any;
        binding?: any;
        initialized?: any;
        itemsSourceChanged?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.map.GeoMapLayer} class.
 *
 * The <b>geo-map-layer</b> component should be contained in
 * a {@link wijmo.react.chart.map.FlexMap} component.
 *
 * The <b>geo-map-layer</b> component may contain
 * a {@link wijmo.react.chart.map.ColorScale} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.GeoMapLayer} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class GeoMapLayer extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        style?: any;
        itemsSource?: any;
        url?: any;
        itemFormatter?: any;
        initialized?: any;
        itemsSourceChanged?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.map.GeoGridLayer} class.
 *
 * The <b>geo-grid-layer</b> component should be contained in
 * a {@link wijmo.react.chart.map.FlexMap} component.
 *
 * The <b>geo-grid-layer</b> component may contain
 * a {@link wijmo.react.chart.map.ColorScale} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.GeoGridLayer} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class GeoGridLayer extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        style?: any;
        itemsSource?: any;
        url?: any;
        initialized?: any;
        itemsSourceChanged?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.map.ColorScale} class.
 *
 * The <b>color-scale</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.map.ScatterMapLayer}
 * , {@link wijmo.react.chart.map.GeoMapLayer}
 *  or {@link wijmo.react.chart.map.GeoGridLayer}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.ColorScale} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class ColorScale extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        scale?: any;
        binding?: any;
        colorUnknown?: any;
        colors?: any;
        format?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
