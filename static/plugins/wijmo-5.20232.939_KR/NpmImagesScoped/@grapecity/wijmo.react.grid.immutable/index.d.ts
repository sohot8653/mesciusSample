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
 * {@module wijmo.react.grid.immutable}
 * Wijmo interop module for <a href="https://reactjs.org/" target="_blank">React</a>,
 * which provides the {@link wijmo.react.grid.immutable.ImmutabilityProvider} component and
 * its accompanying stuff.
 * It allows you to use {@link wijmo.react.grid.FlexGrid} component with immutable data sources,
 * while keeping all **FlexGrid** data editing and data transformation capabilities.
 * It can be used to incorporate full-featured datagrid components in applications driven
 * by state management systems that require data immutability, such as
 * <a href="https://redux.js.org/" target="_blank">Redux</a>.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component that represents a {@link wijmo.grid.immutable.ImmutabilityProvider} in a {@link wijmo.react.grid.FlexGrid}.
 *
 * The {@link wijmo.react.grid.immutable.ImmutabilityProvider} component,
 * being added to a {@link wijmo.react.grid.FlexGrid} component,
 * allows the latter to perform data edits without mutating the underlying
 * data. Instead, this class provides a data change event, which can be used to dispatch
 * change actions to the global _Store_, such as a
 * <a href="https://redux.js.org/" target="_blank">Redux</a> _Store_.
 *
 * The controlled **FlexGrid** control should not specify its **itemsSource**. Instead, the
 * **itemsSource** property of this class instance should be assigned with the
 * immutable array from the _Store_, which grid will display and edit.
 *
 * When a user edits data via the grid,
 * the {@link wijmo.grid.immutable.ImmutabilityProvider.dataChanged} event is triggered,
 * bringing all the necessary information to you about the change (which item is affected,
 * if item was changed or added or deleted, and so on). This event should be used to dispatch
 * corresponding data change actions to the _Store_.
 *
 * Note that **FlexGrid** edits data on a row level basis, which means that you can change multiple
 * cell values in the same row, and only after you move focus out of the row, all the changes
 * to the row will be applied simultaneously. Or you can press the _Cancel_ key to cancel all
 * the changes in the row. The same is true for adding a row into the datagrid.
 *
 * Note also that some changes like pasting a text into the datagrid, or deleting rows,
 * can affect multiple rows. In this case **ImmutabilityProvider** will trigger
 * the {@link wijmo.grid.immutable.ImmutabilityProvider.dataChanged} event
 * multiple times, separately for each affected row. This simplifies data change processing
 * in the _Store_ reducers.
 *
 * This example demonstrates a fully editable **FlexGrid** component, with an associated
 * **ImmutabilityProvider** component bound to an array from the _Redux Store_. The dataChanged
 * event handler dispatches corresponding data change actions to the _Store_.
 * The example assumes that _Redux Store_ data and action creator functions are bound
 * to the presentation component as properties, using the _react-redux_ _connect_ method.
 * ```typescript
 * import { DataChangeEventArgs, DataChangeAction } from '@grapecity/wijmo.grid.immutable';
 * import { ImmutabilityProvider } from '@grapecity/wijmo.react.grid.immutable';
 * import { FlexGrid } from '@grapecity/wijmo.react.grid';
 *
 * export class GridView extends React.Component<any, any> {
 *   render() {
 *     return <FlexGrid allowAddNew allowDelete>
 *        <ImmutabilityProvider
 *           itemsSource={this.props.items}
 *           dataChanged={this.onGridDataChanged} />
 *     </FlexGrid>
 *   }
 *   onGridDataChanged(s: ImmutabilityProvider, e: DataChangeEventArgs) {
 *       switch (e.action) {
 *           case DataChangeAction.Add:
 *               this.props.addItemAction(e.newItem);
 *               break;
 *           case DataChangeAction.Remove:
 *               this.props.removeItemAction(e.newItem, e.itemIndex);
 *               break;
 *           case DataChangeAction.Change:
 *               this.props.changeItemAction(e.newItem, e.itemIndex);
 *               break;
 *       }
 *   }
 * }
 * ```
 */
export declare class ImmutabilityProvider extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        itemsSource?: any;
        initialized?: any;
        dataChanged?: any;
        cloningItem?: any;
        [key: string]: any;
    };
    _parentInCtor: boolean;
    constructor(props: any);
}
