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
 * {@module wijmo.react.grid.detail}
 * Contains React components for the <b>wijmo.grid.detail</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
import * as wjcCore from '@grapecity/wijmo';
/**
 * React component for the {@link wijmo.grid.detail.FlexGridDetailProvider} class.
 *
 * The <b>flex-grid-detail</b> component should be contained in
 * a {@link wijmo.react.grid.FlexGrid} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.detail.FlexGridDetailProvider} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The component includes a <b>template</b> property which is used to define template for detail row.
 * The template is a function with single argument. The argument is a plain object with keys of
 * <b>row</b> (the row to which detail row belongs),
 * <b>item</b> (item data related to the row) and
 * <b>provider</b> (FlexGrid control, owner of the row).
 */
export declare class FlexGridDetail extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        maxHeight?: any;
        keyActionEnter?: any;
        detailVisibilityMode?: any;
        rowHasDetail?: any;
        isAnimated?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentInCtor: boolean;
    private _renderedCells;
    private _template;
    constructor(props: any);
    protected _onBeforeWillUnmount(e?: wjcCore.EventArgs): void;
    protected _initParent(): void;
    componentDidUpdate(prevProps: any): void;
    private _setTemplateRelatedProps;
    private _getTemplateContext;
    private _unmountRenderedCells;
    private _getCellCreator;
    private _destroyCell;
}
