﻿/*!
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

import * as ɵngcc0 from '@angular/core';

var _c0 = ["*"];
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,o,i){var l,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n},__param=this&&this.__param||function(e,t){return function(o,i){t(o,i,e)}};import{Component,NgModule,ElementRef,Injector,Directive,ViewContainerRef,TemplateRef,Optional,forwardRef,Inject,ChangeDetectorRef,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridMultirow from"@grapecity/wijmo.grid.multirow";import*as wjGrid from"@grapecity/wijmo.angular2.grid";var wjMultiRowMeta={selector:"wj-multi-row",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","showPlaceholders","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","itemValidator","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","layoutDefinition","headerLayoutDefinition","centerHeadersVertically","collapsedHeaders","showHeaderCollapseButton","multiRowGroupHeaders","commitEmptyEdits","headersFocusability"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","pinningColumnNg: pinningColumn","pinnedColumnNg: pinnedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangingNg: groupCollapsedChanging","groupCollapsedChangedNg: groupCollapsedChanged","columnGroupCollapsedChangingNg: columnGroupCollapsedChanging","columnGroupCollapsedChangedNg: columnGroupCollapsedChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied","collapsedHeadersChangingNg: collapsedHeadersChanging","collapsedHeadersChangedNg: collapsedHeadersChanged","collapsedHeadersChangePC: collapsedHeadersChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjMultiRowMeta};var WjMultiRow=function(e){__extends(WjMultiRow,e);function WjMultiRow(t,o,i,l){var r=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;r.cdRef=l;r.isInitialized=!1;r._wjBehaviour=WjDirectiveBehavior.attach(r,t,o,i);new wjGrid.DirectiveCellFactory(r,l);r.created();return r}t=WjMultiRow;WjMultiRow.prototype.created=function(){};WjMultiRow.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjMultiRow.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjMultiRow.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjMultiRow.prototype.addEventListener=function(t,o,i,l){var r=this;void 0===l&&(l=!1);var n=WjDirectiveBehavior,a=n.getZone(this);a&&n.outsideZoneEvents[o]?a.runOutsideAngular((function(){e.prototype.addEventListener.call(r,t,o,i,l)})):e.prototype.addEventListener.call(this,t,o,i,l)};WjMultiRow.prototype.startEditing=function(t,o,i,l,r){void 0===t&&(t=!0);this._edtFocus=null;var n=e.prototype.startEditing.call(this,t,o,i,l,r);n&&(this._edtFocus=l||null==l);return n};WjMultiRow.prototype.onCellEditEnding=function(t){this._edtFocus=null;return e.prototype.onCellEditEnding.call(this,t)};var t;WjMultiRow.meta={outputs:wjMultiRowMeta.outputs,changeEvents:{collapsedHeadersChanged:["collapsedHeaders"]}};
WjMultiRow.ɵfac = function WjMultiRow_Factory(t) { return new (t || WjMultiRow)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12), ɵngcc0.ɵɵdirectiveInject(ChangeDetectorRef)); };
WjMultiRow.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjMultiRow, selectors: [["wj-multi-row"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", newRowAtTop: "newRowAtTop", allowAddNew: "allowAddNew", allowDelete: "allowDelete", allowDragging: "allowDragging", allowMerging: "allowMerging", allowResizing: "allowResizing", allowSorting: "allowSorting", allowPinning: "allowPinning", autoScroll: "autoScroll", autoRowHeights: "autoRowHeights", autoSizeMode: "autoSizeMode", autoGenerateColumns: "autoGenerateColumns", autoSearch: "autoSearch", caseSensitiveSearch: "caseSensitiveSearch", quickAutoSize: "quickAutoSize", bigCheckboxes: "bigCheckboxes", childItemsPath: "childItemsPath", groupHeaderFormat: "groupHeaderFormat", headersVisibility: "headersVisibility", showSelectedHeaders: "showSelectedHeaders", showMarquee: "showMarquee", showPlaceholders: "showPlaceholders", itemFormatter: "itemFormatter", isReadOnly: "isReadOnly", imeEnabled: "imeEnabled", mergeManager: "mergeManager", selectionMode: "selectionMode", showGroups: "showGroups", showSort: "showSort", showDropDown: "showDropDown", showAlternatingRows: "showAlternatingRows", showErrors: "showErrors", alternatingRowStep: "alternatingRowStep", itemValidator: "itemValidator", validateEdits: "validateEdits", treeIndent: "treeIndent", itemsSource: "itemsSource", autoClipboard: "autoClipboard", expandSelectionOnCopyPaste: "expandSelectionOnCopyPaste", frozenRows: "frozenRows", frozenColumns: "frozenColumns", cloneFrozenCells: "cloneFrozenCells", deferResizing: "deferResizing", sortRowIndex: "sortRowIndex", editColumnIndex: "editColumnIndex", stickyHeaders: "stickyHeaders", preserveSelectedState: "preserveSelectedState", preserveOutlineState: "preserveOutlineState", preserveWhiteSpace: "preserveWhiteSpace", keyActionTab: "keyActionTab", keyActionEnter: "keyActionEnter", rowHeaderPath: "rowHeaderPath", virtualizationThreshold: "virtualizationThreshold", anchorCursor: "anchorCursor", lazyRender: "lazyRender", refreshOnEdit: "refreshOnEdit", copyHeaders: "copyHeaders", columnGroups: "columnGroups", layoutDefinition: "layoutDefinition", headerLayoutDefinition: "headerLayoutDefinition", centerHeadersVertically: "centerHeadersVertically", collapsedHeaders: "collapsedHeaders", showHeaderCollapseButton: "showHeaderCollapseButton", multiRowGroupHeaders: "multiRowGroupHeaders", commitEmptyEdits: "commitEmptyEdits", headersFocusability: "headersFocusability" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", beginningEditNg: "beginningEdit", cellEditEndedNg: "cellEditEnded", cellEditEndingNg: "cellEditEnding", prepareCellForEditNg: "prepareCellForEdit", formatItemNg: "formatItem", resizingColumnNg: "resizingColumn", resizedColumnNg: "resizedColumn", autoSizingColumnNg: "autoSizingColumn", autoSizedColumnNg: "autoSizedColumn", draggingColumnNg: "draggingColumn", draggingColumnOverNg: "draggingColumnOver", draggedColumnNg: "draggedColumn", sortingColumnNg: "sortingColumn", sortedColumnNg: "sortedColumn", pinningColumnNg: "pinningColumn", pinnedColumnNg: "pinnedColumn", resizingRowNg: "resizingRow", resizedRowNg: "resizedRow", autoSizingRowNg: "autoSizingRow", autoSizedRowNg: "autoSizedRow", draggingRowNg: "draggingRow", draggingRowOverNg: "draggingRowOver", draggedRowNg: "draggedRow", deletingRowNg: "deletingRow", deletedRowNg: "deletedRow", loadingRowsNg: "loadingRows", loadedRowsNg: "loadedRows", rowEditStartingNg: "rowEditStarting", rowEditStartedNg: "rowEditStarted", rowEditEndingNg: "rowEditEnding", rowEditEndedNg: "rowEditEnded", rowAddedNg: "rowAdded", groupCollapsedChangingNg: "groupCollapsedChanging", groupCollapsedChangedNg: "groupCollapsedChanged", columnGroupCollapsedChangingNg: "columnGroupCollapsedChanging", columnGroupCollapsedChangedNg: "columnGroupCollapsedChanged", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged", selectionChangingNg: "selectionChanging", selectionChangedNg: "selectionChanged", scrollPositionChangedNg: "scrollPositionChanged", updatingViewNg: "updatingView", updatedViewNg: "updatedView", updatingLayoutNg: "updatingLayout", updatedLayoutNg: "updatedLayout", pastingNg: "pasting", pastedNg: "pasted", pastingCellNg: "pastingCell", pastedCellNg: "pastedCell", copyingNg: "copying", copiedNg: "copied", collapsedHeadersChangingNg: "collapsedHeadersChanging", collapsedHeadersChangedNg: "collapsedHeadersChanged", collapsedHeadersChangePC: "collapsedHeadersChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjMultiRowMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjMultiRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjMultiRow, [{
        type: Component,
        args: [{ selector: wjMultiRowMeta.selector, template: wjMultiRowMeta.template, inputs: wjMultiRowMeta.inputs, outputs: wjMultiRowMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjMultiRowMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ChangeDetectorRef]
            }] }]; }, null); })();return WjMultiRow=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional()),__param(3,Inject(ChangeDetectorRef))],WjMultiRow)}(wjcGridMultirow.MultiRow);export{WjMultiRow};var wjMultiRowCellMeta={selector:"wj-multi-row-cell",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","name","dataMap","dataType","binding","sortMemberPath","format","cellTemplate","header","width","maxLength","minWidth","maxWidth","align","allowDragging","allowSorting","allowResizing","allowMerging","aggregate","isReadOnly","cssClass","cssClassAll","isContentHtml","visible","wordWrap","multiLine","mask","inputType","isRequired","showDropDown","dataMapEditor","dropDownCssClass","quickAutoSize","editor","colspan","rowspan"],outputs:["initialized"],providers:[]};export{wjMultiRowCellMeta};var WjMultiRowCell=function(e){__extends(WjMultiRowCell,e);function WjMultiRowCell(t,o,i,l){var r=e.call(this)||this;r.cdRef=l;r.isInitialized=!1;r.wjProperty="cells";r._wjBehaviour=WjDirectiveBehavior.attach(r,t,o,i);r.created();return r}t=WjMultiRowCell;WjMultiRowCell.prototype.created=function(){};WjMultiRowCell.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjMultiRowCell.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjMultiRowCell.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjMultiRowCell.meta={outputs:wjMultiRowCellMeta.outputs};
WjMultiRowCell.ɵfac = function WjMultiRowCell_Factory(t) { return new (t || WjMultiRowCell)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12), ɵngcc0.ɵɵdirectiveInject(ChangeDetectorRef)); };
WjMultiRowCell.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjMultiRowCell, selectors: [["wj-multi-row-cell"]], inputs: { wjProperty: "wjProperty", name: "name", dataMap: "dataMap", dataType: "dataType", binding: "binding", sortMemberPath: "sortMemberPath", format: "format", cellTemplate: "cellTemplate", header: "header", width: "width", maxLength: "maxLength", minWidth: "minWidth", maxWidth: "maxWidth", align: "align", allowDragging: "allowDragging", allowSorting: "allowSorting", allowResizing: "allowResizing", allowMerging: "allowMerging", aggregate: "aggregate", isReadOnly: "isReadOnly", cssClass: "cssClass", cssClassAll: "cssClassAll", isContentHtml: "isContentHtml", visible: "visible", wordWrap: "wordWrap", multiLine: "multiLine", mask: "mask", inputType: "inputType", isRequired: "isRequired", showDropDown: "showDropDown", dataMapEditor: "dataMapEditor", dropDownCssClass: "dropDownCssClass", quickAutoSize: "quickAutoSize", editor: "editor", colspan: "colspan", rowspan: "rowspan" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjMultiRowCellMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjMultiRowCell_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjMultiRowCell, [{
        type: Component,
        args: [{ selector: wjMultiRowCellMeta.selector, template: wjMultiRowCellMeta.template, inputs: wjMultiRowCellMeta.inputs, outputs: wjMultiRowCellMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjMultiRowCellMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ChangeDetectorRef]
            }] }]; }, null); })();return WjMultiRowCell=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional()),__param(3,Inject(ChangeDetectorRef))],WjMultiRowCell)}(wjcGridMultirow.MultiRowCell);export{WjMultiRowCell};var wjMultiRowCellGroupMeta={selector:"wj-multi-row-cell-group",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","name","dataMap","dataType","binding","sortMemberPath","format","cellTemplate","header","width","maxLength","minWidth","maxWidth","align","allowDragging","allowSorting","allowResizing","allowMerging","aggregate","isReadOnly","cssClass","cssClassAll","isContentHtml","visible","wordWrap","multiLine","mask","inputType","isRequired","showDropDown","dataMapEditor","dropDownCssClass","quickAutoSize","editor","colspan","rowspan"],outputs:["initialized"],providers:[]};export{wjMultiRowCellGroupMeta};var WjMultiRowCellGroup=function(e){__extends(WjMultiRowCellGroup,e);function WjMultiRowCellGroup(t,o,i,l){var r=e.call(this)||this;r.cdRef=l;r.isInitialized=!1;r.wjProperty="layoutDefinition";r._wjBehaviour=WjDirectiveBehavior.attach(r,t,o,i);r.created();return r}t=WjMultiRowCellGroup;WjMultiRowCellGroup.prototype.created=function(){};WjMultiRowCellGroup.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjMultiRowCellGroup.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjMultiRowCellGroup.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjMultiRowCellGroup.meta={outputs:wjMultiRowCellGroupMeta.outputs};
WjMultiRowCellGroup.ɵfac = function WjMultiRowCellGroup_Factory(t) { return new (t || WjMultiRowCellGroup)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12), ɵngcc0.ɵɵdirectiveInject(ChangeDetectorRef)); };
WjMultiRowCellGroup.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjMultiRowCellGroup, selectors: [["wj-multi-row-cell-group"]], inputs: { wjProperty: "wjProperty", name: "name", dataMap: "dataMap", dataType: "dataType", binding: "binding", sortMemberPath: "sortMemberPath", format: "format", cellTemplate: "cellTemplate", header: "header", width: "width", maxLength: "maxLength", minWidth: "minWidth", maxWidth: "maxWidth", align: "align", allowDragging: "allowDragging", allowSorting: "allowSorting", allowResizing: "allowResizing", allowMerging: "allowMerging", aggregate: "aggregate", isReadOnly: "isReadOnly", cssClass: "cssClass", cssClassAll: "cssClassAll", isContentHtml: "isContentHtml", visible: "visible", wordWrap: "wordWrap", multiLine: "multiLine", mask: "mask", inputType: "inputType", isRequired: "isRequired", showDropDown: "showDropDown", dataMapEditor: "dataMapEditor", dropDownCssClass: "dropDownCssClass", quickAutoSize: "quickAutoSize", editor: "editor", colspan: "colspan", rowspan: "rowspan" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjMultiRowCellGroupMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjMultiRowCellGroup_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjMultiRowCellGroup, [{
        type: Component,
        args: [{ selector: wjMultiRowCellGroupMeta.selector, template: wjMultiRowCellGroupMeta.template, inputs: wjMultiRowCellGroupMeta.inputs, outputs: wjMultiRowCellGroupMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjMultiRowCellGroupMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ChangeDetectorRef]
            }] }]; }, null); })();return WjMultiRowCellGroup=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional()),__param(3,Inject(ChangeDetectorRef))],WjMultiRowCellGroup)}(wjcGridMultirow.MultiRowCellGroup);export{WjMultiRowCellGroup};var WjMultiRowCellTemplate=function(e){__extends(WjMultiRowCellTemplate,e);function WjMultiRowCellTemplate(t,o,i,l,r,n){return e.call(this,t,o,i,l,r,n)||this}t=WjMultiRowCellTemplate;var t;
WjMultiRowCellTemplate.ɵfac = function WjMultiRowCellTemplate_Factory(t) { return new (t || WjMultiRowCellTemplate)(ɵngcc0.ɵɵdirectiveInject(ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(TemplateRef, 8), ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject(ChangeDetectorRef)); };
WjMultiRowCellTemplate.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: WjMultiRowCellTemplate, selectors: [["", "wjMultiRowCellTemplate", ""]], inputs: { wjMultiRowCellTemplate: "wjMultiRowCellTemplate", cellTypeStr: ["cellType", "cellTypeStr"], cellOverflow: "cellOverflow", valuePaths: "valuePaths", autoSizeRows: "autoSizeRows", forceFullEdit: "forceFullEdit" }, exportAs: ["wjMultiRowCellTemplate"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjMultiRowCellTemplate, [{
        type: Directive,
        args: [{ selector: "[wjMultiRowCellTemplate]", inputs: ["wjMultiRowCellTemplate", "cellTypeStr: cellType", "cellOverflow", "valuePaths", "autoSizeRows", "forceFullEdit"], exportAs: "wjMultiRowCellTemplate", providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ViewContainerRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [TemplateRef]
            }, {
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ChangeDetectorRef]
            }] }]; }, null); })();return WjMultiRowCellTemplate=t=__decorate([,__param(0,Inject(ViewContainerRef)),__param(1,Inject(TemplateRef)),__param(1,Optional()),__param(2,Inject(ElementRef)),__param(3,Inject("WjComponent")),__param(3,SkipSelf()),__param(3,Optional()),__param(4,Inject(Injector)),__param(5,Inject(ChangeDetectorRef))],WjMultiRowCellTemplate)}(wjGrid.WjFlexGridCellTemplate);export{WjMultiRowCellTemplate};var moduleExports=[WjMultiRow,WjMultiRowCell,WjMultiRowCellGroup,WjMultiRowCellTemplate],WjGridMultirowModule=function(){function WjGridMultirowModule(){}
WjGridMultirowModule.ɵfac = function WjGridMultirowModule_Factory(t) { return new (t || WjGridMultirowModule)(); };
WjGridMultirowModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridMultirowModule });
WjGridMultirowModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridMultirowModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridMultirowModule, { declarations: function () { return [WjMultiRow, WjMultiRowCell, WjMultiRowCellGroup, WjMultiRowCellTemplate]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjMultiRow, WjMultiRowCell, WjMultiRowCellGroup, WjMultiRowCellTemplate]; } }); })();return WjGridMultirowModule}();export{WjGridMultirowModule};