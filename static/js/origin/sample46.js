let spread;
window.onload = function () {
  $(".content_box_loading").show();
  $("#btnGrid").on("click", function (e) {
    window.history.back();
    // location.href = `/sample?depth1=${depth1}&depth2=출고요청서&sampleId=11`;
  });
  // $('#btnGrid2').on('click', function(e){
  //     location.href = `/sample?depth1=${depth1}&depth2=배송내역서&sampleId=21`;
  // });

  // host the workbook control in a DIV element with id "ss"
  spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));

  if (localStorageIndex48 == "-1") {
    initSpreadDefault(spread);
  } else {
    spread.suspendPaint();
    spread.fromJSON(
      JSON.parse(localStorage.getItem("sample48Json" + localStorageIndex48))
    );
    spread.resumePaint();
    $(".content_box_loading").hide();
  }

  document.getElementById("btnExcel").onclick = function () {
    var fileName = "Delivery Details_OD2310392635.xlsx";
    var options = {
      includeBindingSource: false,
      includeStyles: true,
      includeFormulas: true,
      saveAsView: false,
      rowHeadersAsFrozenColumns: false,
      columnHeadersAsFrozenRows: false,
      includeAutoMergedCells: false,
      includeCalcModelCache: false,
      includeUnusedNames: true,
      includeEmptyRegionCells: true,
      fileType: 0,
    };

    spread.export(
      function (blob) {
        saveAs(blob, fileName);
      },
      function () {},
      options
    );
  };
};

function initSpreadDefault(spread) {
  fetch("json/Sample46.ssjson")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      spread.fromJSON(jsondata);
      return;
    })
    .then((x) => {
      spread.suspendPaint();
      var sheet = spread.getSheetFromName("Sheet1");
      var SheetArea = GC.Spread.Sheets.SheetArea;
      spread.options.showVerticalScrollbar = false;
      spread.options.showHorizontalScrollbar = false;
      spread.options.backColor = "#e6e6e6";
      spread.options.grayAreaBackColor = "#e6e6e6";
      sheet.options.rowHeaderVisible = false;
      sheet.options.colHeaderVisible = false;
      sheet.options.selectionBorderColor = "transparent";
      sheet.scroll(-1000, 0);

      sheet.setColumnWidth(1, "*");
      sheet.setColumnWidth(3, "*");
      sheet.setColumnWidth(5, "*");
      sheet.setColumnWidth(7, "*");

      sheet.setValue(
        1,
        0,
        "large object : Picking worker [ KO ]    inspection officer [ KIM ]"
      );
      sheet.setValue(
        2,
        0,
        "subsidiary materials : Picking worker [ CHA ]    inspection officer [ KIM]"
      );

      sheet.setValue(3, 1, "DL23090015231");
      sheet.setValue(3, 3, "General order");
      sheet.setValue(3, 6, "DL34235056056");

      sheet.setValue(4, 1, "JANG");
      sheet.setValue(4, 3, "KIM");
      sheet.setValue(4, 5, "02-548-4888");
      sheet.setValue(4, 7, "010-5489-4888");

      sheet.setValue(5, 1, "CHA");
      sheet.setValue(5, 3, "-");
      sheet.setValue(5, 5, "02-548-9688");
      sheet.setValue(5, 7, "010-5519-7898");

      sheet.setValue(6, 1, "[11563] LOCAL 1");
      sheet.setValue(6, 7, "KIM");

      sheet.setValue(7, 1, "2023-12-18");
      sheet.setValue(7, 3, "15 : 30");
      sheet.setValue(7, 5, "X");
      sheet.setValue(7, 7, "010-5519-7898");

      sheet.setValue(
        8,
        1,
        "Please contact the inspection officer first when it is shipped."
      );
      sheet.setValue(9, 1, "-");
      sheet.setValue(9, 7, "KO");

      var data1 = getData1();
      sheet.addRows(sheet.getRowCount(SheetArea.viewport), data1.length + 5);
      sheet
        .getCell(11, 0)
        .text("Adding a single bathroom")
        .font("bold normal 18px normal");
      sheet.getCell(12, 0).text("No").font("bold normal 15px normal");
      sheet.getCell(12, 1).text("Product code").font("bold normal 15px normal");
      sheet
        .getCell(12, 3)
        .text("Name of the product")
        .font("bold normal 15px normal");
      sheet.getCell(12, 5).text("Quantity").font("bold normal 15px normal");
      sheet.getCell(12, 6).text("Memo").font("bold normal 15px normal");

      sheet.setRowHeight(11, 50.0, SheetArea.viewport);
      sheet.getRange(12, 0, 1, 8).foreColor("#ffffff");
      sheet.getRange(12, 0, 1, 8).backColor("#36495e");
      sheet
        .getRange(12, 0, 1, 8)
        .hAlign(GC.Spread.Sheets.HorizontalAlign.center);

      var sum = 0;
      data1.forEach((x, i) => {
        var startCell = 13 + i;
        sheet.getCell(startCell, 0).text(x.c1);
        sheet.getCell(startCell, 1).text(x.c2);
        sheet.getCell(startCell, 3).text(x.c3);
        sheet.getCell(startCell, 5).text(x.c4 + "EA");
        sheet.getCell(startCell, 6).text(x.c5);
        sheet.addSpan(startCell, 1, 1, 2);
        sheet.addSpan(startCell, 3, 1, 2);
        sheet.addSpan(startCell, 6, 1, 2);
        sheet.getRange(startCell, 0, 1, 8).backColor("#FFFFFF");

        sum += x.c4;
      });

      sheet
        .getCell(13 + data1.length, 0)
        .text("Total")
        .font("bold normal 15px normal");
      sheet.getRange(13 + data1.length, 0, 1, 8).backColor("#fff9c4");
      sheet.addSpan(13 + data1.length, 1, 1, 4);
      sheet.addSpan(13 + data1.length, 6, 1, 2);
      sheet
        .getCell(13 + data1.length, 5)
        .text(sum + "EA")
        .font("bold normal 15px normal");

      sheet
        .getRange(13, 0, data1.length + 1, 7)
        .hAlign(GC.Spread.Sheets.HorizontalAlign.center);

      sheet.addSpan(12, 1, 1, 2);
      sheet.addSpan(12, 3, 1, 2);
      sheet.addSpan(12, 6, 1, 2);

      var lineStyle = GC.Spread.Sheets.LineStyle.thin;
      var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
      sheet
        .getRange(12, 0, data1.length + 2, 8)
        .setBorder(lineBorder, { all: true });

      var startCell2 = 13 + data1.length + 2;
      var data2 = getData2();
      sheet.addRows(sheet.getRowCount(SheetArea.viewport), data2.length + 5);
      sheet
        .getCell(startCell2, 0)
        .text("Bathroom Basic")
        .font("bold normal 18px normal");
      sheet
        .getCell(startCell2 + 1, 0)
        .text("No")
        .font("bold normal 15px normal");
      sheet
        .getCell(startCell2 + 1, 1)
        .text("Product code")
        .font("bold normal 15px normal");
      sheet
        .getCell(startCell2 + 1, 3)
        .text("Name of the product")
        .font("bold normal 15px normal");
      sheet
        .getCell(startCell2 + 1, 5)
        .text("Quantity")
        .font("bold normal 15px normal");
      sheet
        .getCell(startCell2 + 1, 6)
        .text("Memo")
        .font("bold normal 15px normal");

      sheet.setRowHeight(startCell2, 50.0, SheetArea.viewport);
      sheet.getRange(startCell2 + 1, 0, 1, 8).foreColor("#ffffff");
      sheet.getRange(startCell2 + 1, 0, 1, 8).backColor("#36495e");
      sheet
        .getRange(startCell2 + 1, 0, 1, 8)
        .hAlign(GC.Spread.Sheets.HorizontalAlign.center);

      var sum = 0;
      data2.forEach((x, i) => {
        var startCell = startCell2 + 2 + i;
        sheet.getCell(startCell, 0).text(x.c1);
        sheet.getCell(startCell, 1).text(x.c2);
        sheet.getCell(startCell, 3).text(x.c3);
        sheet.getCell(startCell, 5).text(x.c4 + "EA");
        sheet.getCell(startCell, 6).text(x.c5);
        sheet.addSpan(startCell, 1, 1, 2);
        sheet.addSpan(startCell, 3, 1, 2);
        sheet.addSpan(startCell, 6, 1, 2);
        sheet.getRange(startCell, 0, 1, 8).backColor("#FFFFFF");

        sum += x.c4;
      });

      startCell = startCell2 + 2 + data1.length;
      sheet.getCell(startCell, 0).text("Total").font("bold normal 15px normal");
      sheet.getRange(startCell, 0, 1, 8).backColor("#fff9c4");
      sheet.addSpan(startCell, 1, 1, 4);
      sheet.addSpan(startCell, 6, 1, 2);
      sheet
        .getCell(startCell, 5)
        .text(sum + "EA")
        .font("bold normal 15px normal");

      sheet
        .getRange(startCell2 + 1, 0, data2.length + 3, 7)
        .hAlign(GC.Spread.Sheets.HorizontalAlign.center);

      sheet.addSpan(startCell2 + 1, 1, 1, 2);
      sheet.addSpan(startCell2 + 1, 3, 1, 2);
      sheet.addSpan(startCell2 + 1, 6, 1, 2);

      var lineStyle = GC.Spread.Sheets.LineStyle.thin;
      var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
      sheet
        .getRange(startCell2 + 1, 0, data1.length + 2, 8)
        .setBorder(lineBorder, { all: true });
      spread.resumePaint();

      return;
    })
    .then(() => {
      $(".content_box_loading").hide();
    });
}

function getData1() {
  let arr = [];

  for (var i = 1; i < 6; i++) {
    var obj = {};
    var order = getRandomArrayElement([
      ["SAHVO-SSDFS5441FD", "Shower faucet for 4 inches", 3],
      ["SAHVO-SSD1FD", "Shower faucet for 6 inches", 5],
    ]);
    obj.c1 = i + "";
    obj.c2 = order[0];
    obj.c3 = order[1];
    obj.c4 = order[2];
    obj.c5 = "-";
    arr.push(obj);
  }

  function getRandomDate(start, end) {
    const startDate = start.getTime();
    const endDate = end.getTime();

    return new Date(startDate + Math.random() * (endDate - startDate));
  }

  function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return arr;
}

function getData2() {
  let arr = [];

  for (var i = 1; i < 6; i++) {
    var obj = {};
    var order = getRandomArrayElement([
      ["SAHVO-SSDFS5441FD", "Shower faucet for 4 inches", 3],
      ["SAHVO-SSD1FD", "Shower faucet for 6 inches", 5],
    ]);
    obj.c1 = i + "";
    obj.c2 = order[0];
    obj.c3 = order[1];
    obj.c4 = order[2];
    obj.c5 = "-";
    arr.push(obj);
  }

  function getRandomDate(start, end) {
    const startDate = start.getTime();
    const endDate = end.getTime();

    return new Date(startDate + Math.random() * (endDate - startDate));
  }

  function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return arr;
}
