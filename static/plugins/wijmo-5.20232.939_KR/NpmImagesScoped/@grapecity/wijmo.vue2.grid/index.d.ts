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
 * {@module wijmo.vue2.grid}
 * Contains Vue 2 and 3 components for the <b>wijmo.grid</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import * as wjcCore from '@grapecity/wijmo';
import * as wjcInteropGrid from '@grapecity/wijmo.interop.grid';
/**
 * Represents a cell template types enumeration.
 */
export import CellTemplateType = wjcInteropGrid.GridCellTemplateType;
/**
 * Vue component for the {@link wijmo.grid.FlexGrid} control.
 *
 * The <b>wj-flex-grid</b> component may contain
 * the following child components:
 * {@link wijmo.vue2.grid.detail.WjFlexGridDetail}
 * , {@link wijmo.vue2.grid.filter.WjFlexGridFilter}
 * , {@link wijmo.vue2.grid.WjFlexGridColumn}
 * , {@link wijmo.vue2.grid.WjFlexGridColumnGroup}
 * and {@link wijmo.vue2.grid.WjFlexGridCellTemplate}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.FlexGrid} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.grid.FlexGrid} control using Vue markup:
 *
 * <pre>&lt;wj-flex-grid
 *   :items-source="data"&gt;
 *   &lt;wj-flex-grid-column binding="name" header="Name"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column binding="sales" header="Sales" format="c0"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column binding="expenses" header="Expenses" format="c0"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column binding="active" header="Active"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column binding="date" header="Date"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 * &lt;/wj-flex-grid&gt;</pre>
 *
 * The code sets the <b>itemsSource</b> property to a collection that contains the grid
 * data, then specifies the columns to display using <b>wj-flex-grid-column</b>
 * components.
 */
export declare var WjFlexGrid: any;
/**
 * Vue component for the {@link wijmo.grid.Column} class.
 *
 * The <b>wj-flex-grid-column</b> component should be contained in
 * a {@link wijmo.vue2.grid.WjFlexGrid} component.
 *
 * The <b>wj-flex-grid-column</b> component may contain
 * a {@link wijmo.vue2.grid.WjFlexGridCellTemplate} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.Column} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexGridColumn: any;
/**
 * Vue component for the {@link wijmo.grid.ColumnGroup} class.
 *
 * The <b>wj-flex-grid-column-group</b> component should be contained in
 * one of the following components:
 * {@link wijmo.vue2.grid.WjFlexGrid}
 *  or {@link wijmo.vue2.grid.WjFlexGridColumnGroup}.
 *
 * The <b>wj-flex-grid-column-group</b> component may contain
 * the following child components:
 * {@link wijmo.vue2.grid.WjFlexGridColumnGroup}
 * and {@link wijmo.vue2.grid.WjFlexGridCellTemplate}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.ColumnGroup} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexGridColumnGroup: any;
interface ICellTemplateInfoVue extends wjcInteropGrid.ICellTemplateInfo {
    _instantiateTemplate(parent: HTMLElement, dataContext: any): any;
}
interface ICellTemplateCacheVue extends wjcInteropGrid.ICellTemplateCache {
    cellCmp: typeof CellTemplateCmp;
}
interface ICellRenderingInfoVue extends wjcInteropGrid.ICellRenderingInfo {
    templateContext: ICellTemplateInfoVue;
    templateCache: ICellTemplateCacheVue;
}
export declare class DirectiveCellFactory extends wjcInteropGrid.DirectiveCellFactoryBase {
    protected shouldInstantiate(cellInfo: ICellRenderingInfoVue): boolean;
    protected renderTemplate(cellInfo: ICellRenderingInfoVue, initNew: boolean): void;
    protected disposeTemplate(cell: HTMLElement, templateCache: ICellTemplateCacheVue, templateContext: ICellTemplateInfoVue): void;
    protected clearCell(cell: HTMLElement): void;
    protected applyImmediately(cellInfo: ICellRenderingInfoVue): void;
    protected flushPendingEvents(control: wjcCore.Control): void;
    protected getEditorFocusFlag(): boolean;
    protected setEditorFocusFlag(value: boolean): void;
}
export declare const WjFlexGridCellTemplateDefinition: {
    props: {
        cellOverflow: {
            default: any;
        };
        cellType: {
            default: any;
        };
        autoSizeRows: {
            default: boolean;
        };
        forceFullEdit: {
            default: boolean;
        };
    };
    render: (createElement: any) => any;
    mounted: () => void;
    methods: {
        _attachToControl: () => void;
        _detachFromControl: () => void;
        _instantiateTemplate: (parent: HTMLElement, dataContext: any) => any;
    };
};
/**
* Vue component for the {@link FlexGrid} cell templates.
*
* The <b>wj-flex-grid-cell-template</b> component defines a template for a certain
* cell type in {@link FlexGrid}. The template element must contain a <b>cellType</b> attribute that
* specifies the {@link wijmo.vue2.grid.CellTemplateType}. Depending on the template's cell type,
* the <b>wj-flex-grid-cell-template</b> element must be a child
* of either {@link wijmo.vue2.grid.WjFlexGrid}
* or {@link wijmo.vue2.grid.WjFlexGridColumn} components.
*
* Column-specific cell templates must be contained in <b>wj-flex-grid-column</b>
* components, and cells that are not column-specific (like row header or top left cells)
* must be contained in the <b>wj-flex-grid</b> component.
*
* The <b>wj-flex-grid-cell-template</b> element
* may contain an arbitrary HTML fragment with Vue interpolation expressions and
* other components and directives.
*
* Bindings in HTML fragment can use scoped slot properties that store cell specific data.
* The properties are <b>col</b>, <b>row</b>, and <b>item</b>, which refer to the {@link Column},
* {@link Row}, and <b>Row.dataItem</b> objects pertaining to the cell.
*
* For cell types like <b>Group</b> and <b>CellEdit</b>, an additional <b>value</b>
* property containing an unformatted cell value is provided.
*
* To reference slot properties, you can use either a new v-slot directive right on the
* <b>wj-flex-grid-cell-template</b> element (it's available in Vue 2.6.0 or higher),
* or an old slot-scope directive on the <b>&lt;template&gt;</b> element nested in
* wj-flex-grid-cell-template.
*
* For example, here is a
* {@link FlexGrid} control with templates for row header cells and, regular
* and column header cells of the Country column:
*
* ```html
* <!-- component.html -->
* <wj-flex-grid :itemsSource="data">
*   <wj-flex-grid-cell-template cellType="RowHeader" v-slot="cell">
*     {{cell.row.index}}
*   </wj-flex-grid-cell-template>
*   <wj-flex-grid-cell-template cellType="RowHeaderEdit">
*     ...
*   </wj-flex-grid-cell-template>
*
*   <wj-flex-grid-column header="Country" binding="country">
*     <wj-flex-grid-cell-template cellType="ColumnHeader" v-slot="cell">
*       <img src="resources/globe.png" />
*         {{cell.col.header}}
*     </wj-flex-grid-cell-template>
*     <wj-flex-grid-cell-template cellType="Cell" v-slot="cell">
*       <img :src="'resources/' + cell.item.country + '.png'" />
*       {{cell.item.country}}
*     </wj-flex-grid-cell-template>
*   </wj-flex-grid-column>
*   <wj-flex-grid-column header="Sales" binding="sales"></wj-flex-grid-column>
* </wj-flex-grid>
* ```
*
* The <b>wj-flex-grid-cell-template</b> directive supports the following attributes:
*
* <dl class="dl-horizontal">
*   <dt>cellType</dt>
*   <dd>
*     The <b>CellTemplateType</b> value defining the type of cell to which the template is applied.
*   </dd>
*   <dt>autoSizeRows</dt>
*   <dd>
*     Indicates whether the cell template will increase grid's default row height
*     to accomodate cells content. Defaults to true.
*   </dd>
*   <dt>cellOverflow</dt>
*   <dd>
*     Defines the <b>style.overflow</b> property value for cells.
*   </dd>
*   <dt>forceFullEdit</dt>
*   <dd>
*     For cell edit templates, indicates whether cell editing forcibly starts in full edit mode,
*     regardless of how the editing was initiated. In full edit mode pressing cursor keys don't finish editing.
*     Defaults to true.
*   </dd>
* </dl>
*
* The <b>cellType</b> attribute takes any of the following enumerated values:
*
* <b>Cell</b>
*
* Defines a regular (data) cell template. Must be a child of the {@link wijmo.vue2.grid.WjFlexGridColumn} component.
* For example, this cell template shows flags in the cells of Country column:
*
* ```html
* <wj-flex-grid-column header="Country" binding="country">
*   <wj-flex-grid-cell-template cellType="Cell" v-slot="cell">
*     <img :src="'resources/' + cell.item.country + '.png'" />
*     {{cell.item.country}}
*   </wj-flex-grid-cell-template>
* </wj-flex-grid-column>
* ```
*
* If <b>Group</b> template is not provided for a hierarchical {@link FlexGrid} (that is, one with the <b>childItemsPath</b> property
* specified), non-header cells in group rows of
* this {@link Column} also use this template.
*
* <b>CellEdit</b>
*
* Defines a template for a cell in edit mode. Must be a child of the {@link wijmo.vue2.grid.WjFlexGridColumn} component.
* This cell type has an additional <b>value</b> scoped slot property available for binding. It contains the
* original cell value before editing, and the updated value after editing.
*
* For example, here is a template that uses the Wijmo {@link InputNumber} control as an editor
* for the "Sales" column:
* ```html
* <wj-flex-grid-column header="Sales" binding="sales">
*   <wj-flex-grid-cell-template cellType="CellEdit">
*     <wj-input-number v-model="cell.value" :step="1"></wj-input-number>
*   </wj-flex-grid-cell-template>
* </wj-flex-grid-column>
* ```
*
* Note that two-way binding can also be specified using the binding's <b>sync</b> modifier:
* ```html
* <wj-flex-grid-column header="Sales" binding="sales">
*   <wj-flex-grid-cell-template cellType="CellEdit">
*     <wj-input-number value.sync="cell.value" :step="1"></wj-input-number>
*   </wj-flex-grid-cell-template>
* </wj-flex-grid-column>
* ```
*
* <b>ColumnHeader</b>
*
* Defines a template for a column header cell. Must be a child of the {@link wijmo.vue2.grid.WjFlexGridColumn} component.
* For example, this template adds an image to the header of the "Country" column:
*
* ```html
* <wj-flex-grid-column header="Country" binding="country">
*   <wj-flex-grid-cell-template cellType="ColumnHeader" v-slot="cell">
*     <img src="resources/globe.png" />
*     {{cell.col.header}}
*   </wj-flex-grid-cell-template>
* </wj-flex-grid-column>
* ```
*
* <b>RowHeader</b>
*
* Defines a template for a row header cell. Must be a child of the {@link wijmo.vue2.grid.WjFlexGrid} component.
* For example, this template shows row indices in the row headers:
*
* ```html
* <wj-flex-grid :itemsSource="data">
*   <wj-flex-grid-cell-template cellType="RowHeader" v-slot="cell">
*     {{cell.row.index + 1}}
*   </wj-flex-grid-cell-template>
* </wj-flex-grid>
* ```
*
* Note that this template is applied to a row header cell, even if it is in a row that is
* in edit mode. In order to provide an edit-mode version of a row header cell with alternate
* content, define the <b>RowHeaderEdit</b> template.
*
* <b>RowHeaderEdit</b>
*
* Defines a template for a row header cell in edit mode. Must be a child of the
* {@link wijmo.vue2.grid.WjFlexGrid} component. For example, this template shows dots in the header
* of rows being edited:
*
* ```html
* <wj-flex-grid :itemsSource="data">
*   <wj-flex-grid-cell-template cellType="RowHeaderEdit">
*     ...
*   </wj-flex-grid-cell-template>
* </wj-flex-grid>
* ```
*
* Use the following <b>RowHeaderEdit</b> template to add the standard edit-mode indicator to cells where the <b>RowHeader</b> template
* applies:
*
* ```html
* <wj-flex-grid :itemsSource="data">
*   <wj-flex-grid-cell-template cellType="RowHeaderEdit">
*     &#x270e;&#xfe0e;
*   </wj-flex-grid-cell-template>
* </wj-flex-grid>
* ```
*
* <b>TopLeft</b>
*
* Defines a template for the top left cell. Must be a child of the {@link wijmo.vue2.grid.WjFlexGrid} component.
* For example, this template shows a down/right glyph in the top-left cell of the grid:
*
* ```html
* <wj-flex-grid :itemsSource="data">
*   <wj-flex-grid-cell-template cellType="TopLeft">
*     <span class="wj-glyph-down-right"></span>
*   </wj-flex-grid-cell-template>
* </wj-flex-grid>
* ```
*
* <b>GroupHeader</b>
*
* Defines a template for a group header cell in a {@link GroupRow}. Must be a child of the {@link wijmo.vue2.grid.WjFlexGridColumn} component.
*
* The <b>row</b> scoped slot property contains an instance of the <b>GroupRow</b> class. If the grouping comes
* from {@link CollectionView}, the <b>item</b> scoped slot property references the {@link CollectionViewGroup} object.
*
* For example, this template uses a checkbox element as an expand/collapse toggle:
*
* ```html
* <wj-flex-grid-column header="Country" binding="country">
*   <wj-flex-grid-cell-template cellType="GroupHeader" v-slot="cell">
*     <input type="checkbox" v-model="cell.row.isCollapsed"/>
*     {{cell.item.name}} ({{cell.item.items.length}} items)
*   </wj-flex-grid-cell-template>
* </wj-flex-grid-column>
* ```
*
* <b>Group</b>
*
* Defines a template for a regular cell (not a group header) in a {@link GroupRow}. Must be a child of the
* {@link wijmo.vue2.grid.WjFlexGridColumn} component. This cell type has an additional <b>value</b> scoped
* slot property available for
* binding. In cases where columns have the <b>aggregate</b> property specified, it contains the unformatted
* aggregate value.
*
* For example, this template shows aggregate's value and kind for group row cells in the "Sales"
* column:
*
* ```html
* <wj-flex-grid-column header="Sales" binding="sales" aggregate="Avg">
*   <wj-flex-grid-cell-template cellType="Group" v-slot="cell">
*     Average: {{formatNumber(cell.value, 'N0')}}
*   </wj-flex-grid-cell-template>
* </wj-flex-grid-column>
* ```
*
* <b>ColumnFooter</b>
*
* Defines a template for a regular cell in a <b>columnFooters</b> panel. Must be a child of the
* {@link wijmo.vue2.grid.WjFlexGridColumn} component. This cell type has an additional <b>value</b>
* scoped slot property available for binding that contains a cell value.
*
* For example, this template shows aggregate's value and kind for a footer cell in the "Sales"
* column:
*
* ```html
* <wj-flex-grid-column header="Sales" binding="sales" aggregate="Avg">
*   <wj-flex-grid-cell-template cellType="ColumnFooter" v-slot="cell">
*     Average: {{formatNumber(cell.value, 'N0')}}
*   </wj-flex-grid-cell-template>
* </wj-flex-grid-column>
* ```
*
* <b>BottomLeft</b>
*
* Defines a template for the bottom left cells (at the intersection of the row header and column footer cells).
* Must be a child of the {@link wijmo.vue2.grid.WjFlexGrid} component.
* For example, this template shows a sigma glyph in the bottom-left cell of the grid:
*
* ```html
* <wj-flex-grid :itemsSource="data">
*   <wj-flex-grid-cell-template cellType="BottomLeft">
*     &#931;
*   </wj-flex-grid-cell-template>
* </wj-flex-grid>
* ```
*
* <b>NewCellTemplate</b>
*
* Defines a cell in a new row template. Must be a child of the {@link wijmo.vue2.grid.WjFlexGridColumn} component.
* Note that the <b>cell.item</b> property is undefined for this type of a cell.
* For example, this cell template shows a placeholder in the Date column's cell in the "new row" item:
*
* ```html
* <wj-flex-grid-column header="'Date'" binding="'date'">
*   <wj-flex-grid-cell-template cellType="NewCellTemplate">
*     Enter a date here
*   </wj-flex-grid-cell-template>
* </wj-flex-grid-column>
* ```
*/
export declare var WjFlexGridCellTemplate: any;
declare var CellTemplateCmp: any;
export declare function registerGrid(app: any): void;
export {};
