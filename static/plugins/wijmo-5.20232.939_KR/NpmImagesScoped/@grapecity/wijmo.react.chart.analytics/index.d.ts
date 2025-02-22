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
 * {@module wijmo.react.chart.analytics}
 * Contains React components for the <b>wijmo.chart.analytics</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.analytics.TrendLine} class.
 *
 * The <b>flex-chart-trend-line</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 *  or {@link wijmo.react.chart.finance.FinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.analytics.TrendLine} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartTrendLine extends ComponentBase {
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
        sampleCount?: any;
        order?: any;
        fitType?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.analytics.MovingAverage} class.
 *
 * The <b>flex-chart-moving-average</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 *  or {@link wijmo.react.chart.finance.FinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.analytics.MovingAverage} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartMovingAverage extends ComponentBase {
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
        sampleCount?: any;
        period?: any;
        type?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.analytics.YFunctionSeries} class.
 *
 * The <b>flex-chart-y-function-series</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 *  or {@link wijmo.react.chart.finance.FinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.analytics.YFunctionSeries} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartYFunctionSeries extends ComponentBase {
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
        sampleCount?: any;
        min?: any;
        max?: any;
        func?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.analytics.ParametricFunctionSeries} class.
 *
 * The <b>flex-chart-parametric-function-series</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 *  or {@link wijmo.react.chart.finance.FinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.analytics.ParametricFunctionSeries} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartParametricFunctionSeries extends ComponentBase {
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
        sampleCount?: any;
        min?: any;
        max?: any;
        func?: any;
        xFunc?: any;
        yFunc?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.analytics.Waterfall} class.
 *
 * The <b>flex-chart-waterfall</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 *  or {@link wijmo.react.chart.finance.FinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.analytics.Waterfall} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartWaterfall extends ComponentBase {
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
        relativeData?: any;
        start?: any;
        startLabel?: any;
        showTotal?: any;
        totalLabel?: any;
        showIntermediateTotal?: any;
        intermediateTotalPositions?: any;
        intermediateTotalLabels?: any;
        connectorLines?: any;
        styles?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.analytics.BoxWhisker} class.
 *
 * The <b>flex-chart-box-whisker</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 *  or {@link wijmo.react.chart.finance.FinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.analytics.BoxWhisker} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartBoxWhisker extends ComponentBase {
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
        quartileCalculation?: any;
        groupWidth?: any;
        gapWidth?: any;
        showMeanLine?: any;
        meanLineStyle?: any;
        showMeanMarker?: any;
        meanMarkerStyle?: any;
        showInnerPoints?: any;
        showOutliers?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.analytics.ErrorBar} class.
 *
 * The <b>flex-chart-error-bar</b> component should be contained in
 * a {@link wijmo.react.chart.FlexChart} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.analytics.ErrorBar} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartErrorBar extends ComponentBase {
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
        errorBarStyle?: any;
        value?: any;
        errorAmount?: any;
        endStyle?: any;
        direction?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.analytics.BreakEven} class.
 *
 * The <b>flex-chart-break-even</b> component should be contained in
 * a {@link wijmo.react.chart.FlexChart} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.analytics.BreakEven} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartBreakEven extends ComponentBase {
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
        fixedCost?: any;
        variableCost?: any;
        salesPrice?: any;
        styles?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
