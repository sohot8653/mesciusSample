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
 * {@module wijmo.react.chart.radar}
 * Contains React components for the <b>wijmo.chart.radar</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.radar.FlexRadar} control.
 *
 * The <b>flex-radar</b> component may contain
 * the following child components:
 * {@link wijmo.react.chart.animation.FlexChartAnimation}
 * , {@link wijmo.react.chart.radar.FlexRadarAxis}
 * , {@link wijmo.react.chart.radar.FlexRadarSeries}
 * and {@link wijmo.react.chart.FlexChartLegend}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.radar.FlexRadar} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexRadar extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        renderEngine?: any;
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
        bindingX?: any;
        interpolateNulls?: any;
        legendToggle?: any;
        symbolSize?: any;
        options?: any;
        selection?: any;
        itemFormatter?: any;
        labelContent?: any;
        chartType?: any;
        startAngle?: any;
        totalAngle?: any;
        reversed?: any;
        stacking?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        rendering?: any;
        rendered?: any;
        itemsSourceChanging?: any;
        itemsSourceChanged?: any;
        seriesVisibilityChanged?: any;
        selectionChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    private _setExtra;
}
/**
 * React component for the {@link wijmo.chart.radar.FlexRadarAxis} class.
 *
 * The <b>flex-radar-axis</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.radar.FlexRadar}
 *  or {@link wijmo.react.chart.radar.FlexRadarSeries}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.radar.FlexRadarAxis} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexRadarAxis extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        axisLine?: any;
        format?: any;
        labels?: any;
        majorGrid?: any;
        majorTickMarks?: any;
        majorUnit?: any;
        max?: any;
        min?: any;
        position?: any;
        reversed?: any;
        title?: any;
        labelAngle?: any;
        minorGrid?: any;
        minorTickMarks?: any;
        minorUnit?: any;
        origin?: any;
        logBase?: any;
        plotArea?: any;
        labelAlign?: any;
        name?: any;
        overlappingLabels?: any;
        labelPadding?: any;
        itemFormatter?: any;
        itemsSource?: any;
        binding?: any;
        labelMin?: any;
        labelMax?: any;
        initialized?: any;
        rangeChanged?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.radar.FlexRadarSeries} class.
 *
 * The <b>flex-radar-series</b> component should be contained in
 * a {@link wijmo.react.chart.radar.FlexRadar} component.
 *
 * The <b>flex-radar-series</b> component may contain
 * a {@link wijmo.react.chart.radar.FlexRadarAxis} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.radar.FlexRadarSeries} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexRadarSeries extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        axisX?: any;
        axisY?: any;
        binding?: any;
        bindingX?: any;
        cssClass?: any;
        name?: any;
        style?: any;
        altStyle?: any;
        symbolMarker?: any;
        symbolSize?: any;
        symbolStyle?: any;
        visibility?: any;
        itemsSource?: any;
        interpolateNulls?: any;
        tooltipContent?: any;
        itemFormatter?: any;
        chartType?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
