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
 * {@module wijmo.react.chart}
 * Contains React components for the <b>wijmo.chart</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.FlexChart} control.
 *
 * The <b>flex-chart</b> component may contain
 * the following child components:
 * {@link wijmo.react.chart.analytics.FlexChartTrendLine}
 * , {@link wijmo.react.chart.analytics.FlexChartMovingAverage}
 * , {@link wijmo.react.chart.analytics.FlexChartYFunctionSeries}
 * , {@link wijmo.react.chart.analytics.FlexChartParametricFunctionSeries}
 * , {@link wijmo.react.chart.analytics.FlexChartWaterfall}
 * , {@link wijmo.react.chart.analytics.FlexChartBoxWhisker}
 * , {@link wijmo.react.chart.analytics.FlexChartErrorBar}
 * , {@link wijmo.react.chart.analytics.FlexChartBreakEven}
 * , {@link wijmo.react.chart.animation.FlexChartAnimation}
 * , {@link wijmo.react.chart.annotation.FlexChartAnnotationLayer}
 * , {@link wijmo.react.chart.interaction.FlexChartRangeSelector}
 * , {@link wijmo.react.chart.interaction.FlexChartGestures}
 * , {@link wijmo.react.chart.FlexChartAxis}
 * , {@link wijmo.react.chart.FlexChartLegend}
 * , {@link wijmo.react.chart.FlexChartDataLabel}
 * , {@link wijmo.react.chart.FlexChartSeries}
 * , {@link wijmo.react.chart.FlexChartLineMarker}
 * and {@link wijmo.react.chart.FlexChartPlotArea}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.FlexChart} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.chart.FlexChart} control in JSX:
 *
 * <pre>&lt;Wj.FlexChart
 *   itemsSource={ this.state.data }
 *   bindingX="name"
 *   header={ this.state.header }
 *   footer={ this.state.footer }
 *   axisX={&#8203;{ title: this.state.titleX }}
 *   axisY={&#8203;{ title: this.state.titleY }}
 *   legend={&#8203;{ position: this.state.legendPosition }}
 *   series={[
 *       { name: 'Sales', binding: 'sales' },
 *       { name: 'Expenses', binding: 'expenses' },
 *       { name: 'Downloads', binding: 'downloads', chartType: 'LineSymbols' }
 *   ]} /&gt;</pre>
 *

 * The code sets the <b>itemsSource</b> property to a collection that contains
 * the data to chart and the <b>bindingX</b> property to specify the name of the
 * data property to use for the chart's X values.
 *
 * It sets the <b>header</b> and <b>footer</b> properties to specify the
 * chart titles, and customizes the chart's axes and legend.
 *
 * Finally, it sets the <b>series</b> property to an array that specifies the
 * data items that the chart should display.
 */
export declare class FlexChart extends ComponentBase {
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
        rotated?: any;
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
 * React component for the {@link wijmo.chart.FlexPie} control.
 *
 * The <b>flex-pie</b> component may contain
 * the following child components:
 * {@link wijmo.react.chart.animation.FlexChartAnimation}
 * , {@link wijmo.react.chart.FlexChartLegend}
 * and {@link wijmo.react.chart.FlexPieDataLabel}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.FlexPie} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexPie extends ComponentBase {
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
        bindingName?: any;
        innerRadius?: any;
        isAnimated?: any;
        offset?: any;
        reversed?: any;
        startAngle?: any;
        selectedIndex?: any;
        selectedItemPosition?: any;
        selectedItemOffset?: any;
        itemFormatter?: any;
        labelContent?: any;
        titles?: any;
        chartsPerLine?: any;
        innerText?: any;
        innerTextStyle?: any;
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
 * React component for the {@link wijmo.chart.Axis} class.
 *
 * The <b>flex-chart-axis</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 * , {@link wijmo.react.chart.FlexChartSeries}
 * , {@link wijmo.react.chart.finance.FinancialChart}
 *  or {@link wijmo.react.chart.finance.FinancialChartSeries}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.Axis} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartAxis extends ComponentBase {
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
        groupsOptions?: any;
        initialized?: any;
        rangeChanged?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.Legend} class.
 *
 * The <b>flex-chart-legend</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 * , {@link wijmo.react.chart.FlexPie}
 * , {@link wijmo.react.chart.finance.FinancialChart}
 * , {@link wijmo.react.chart.radar.FlexRadar}
 * , {@link wijmo.react.chart.hierarchical.Sunburst}
 *  or {@link wijmo.react.chart.map.FlexMap}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.Legend} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartLegend extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        orientation?: any;
        position?: any;
        title?: any;
        titleAlign?: any;
        maxSize?: any;
        scrollbar?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _parentInCtor: boolean;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.DataLabel} class.
 *
 * The <b>flex-chart-data-label</b> component should be contained in
 * a {@link wijmo.react.chart.FlexChart} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.DataLabel} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartDataLabel extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        content?: any;
        border?: any;
        offset?: any;
        connectingLine?: any;
        position?: any;
        initialized?: any;
        rendering?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.PieDataLabel} class.
 *
 * The <b>flex-pie-data-label</b> component should be contained in
 * a {@link wijmo.react.chart.FlexPie} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.PieDataLabel} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexPieDataLabel extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        content?: any;
        border?: any;
        offset?: any;
        connectingLine?: any;
        position?: any;
        initialized?: any;
        rendering?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.Series} class.
 *
 * The <b>flex-chart-series</b> component should be contained in
 * a {@link wijmo.react.chart.FlexChart} component.
 *
 * The <b>flex-chart-series</b> component may contain
 * a {@link wijmo.react.chart.FlexChartAxis} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.Series} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartSeries extends ComponentBase {
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
/**
 * React component for the {@link wijmo.chart.LineMarker} class.
 *
 * The <b>flex-chart-line-marker</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 *  or {@link wijmo.react.chart.finance.FinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.LineMarker} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartLineMarker extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isVisible?: any;
        seriesIndex?: any;
        horizontalPosition?: any;
        content?: any;
        verticalPosition?: any;
        alignment?: any;
        lines?: any;
        interaction?: any;
        dragLines?: any;
        dragThreshold?: any;
        dragContent?: any;
        initialized?: any;
        positionChanged?: any;
        [key: string]: any;
    };
    _parentInCtor: boolean;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.DataPoint} class.
 *
 * The <b>flex-chart-data-point</b> component should be contained in
 * a {@link wijmo.react.chart.annotation.FlexChartAnnotation} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.DataPoint} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartDataPoint extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        x?: any;
        y?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.PlotArea} class.
 *
 * The <b>flex-chart-plot-area</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 *  or {@link wijmo.react.chart.finance.FinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.PlotArea} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartPlotArea extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        column?: any;
        height?: any;
        name?: any;
        row?: any;
        style?: any;
        width?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
