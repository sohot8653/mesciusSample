let spread; 
window.onload = function() {
    $('.content_box_loading').show();
	spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'));
	initSpread();
    spread.options.showVerticalScrollbar = false;
    spread.options.showHorizontalScrollbar = false;
};

function initSpread() {
    fetch('json/Sample7.ssjson')
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        spread.fromJSON(jsondata);
        return;
    })
    .then(x => {
        spread.suspendPaint();
        spread.options.showVerticalScrollbar = false;
        spread.options.showHorizontalScrollbar = false;
        spread.options.backColor = "#e6e6e6";
        spread.options.grayAreaBackColor = "#e6e6e6";
        var sheet = spread.getSheetFromName('Sheet1');
        sheet.options.rowHeaderVisible = false;
        sheet.options.colHeaderVisible = false;
        sheet.options.selectionBorderColor = "transparent";
        sheet.getRange(1, 0, 8, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
        sheet.getRange(1, 4, 7, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
        sheet.getRange(11, 0, 3, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
        sheet.getRange(11, 2, 3, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
        sheet.getRange(11, 4, 3, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
        sheet.getRange(16, 0, 1, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
        sheet.getRange(16, 4, 1, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center);

        sheet.setColumnWidth(1, "*");
        sheet.setColumnWidth(3, "*");
        sheet.setColumnWidth(5, "*");
        sheet.setColumnWidth(6, "*");

        sheet.scroll(-1000, 0);
        spread.resumePaint();
        return;
    })
    .then(() => {
        $('.content_box_loading').hide();
    });
}