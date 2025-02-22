let spread;
window.onload = function () {
  $(".content_box_loading").show();
  spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), {
    sheetCount: 0,
  });
  initSpread(spread);
  $(".content_box_loading").hide();
};

function initSpread(spread) {
  spread.suspendPaint();
  spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;
  spread.bind(GC.Spread.Sheets.Events.InvalidOperation, function (e, args) {
    alert(args.message);
  });

  //init a data manager
  var dataManager = spread.dataManager();
  //add product table
  var productTable = dataManager.addTable("productTable", {
    data: getData()
  });

  //init a table sheet
  var sheet = spread.addSheetTab(
    0,
    "TableSheet1",
    GC.Spread.Sheets.SheetType.tableSheet
  );
  sheet.applyTableTheme(GC.Spread.Sheets.Tables.TableThemes.professional4);
  sheet.options.allowAddNew = false; //hide new row
  sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);

  //bind a view to the table sheet
  var style = { formatter: "yyyy/MM/dd" };
  var myView = productTable.addView("myView", [
    { value: "c1", width: 100, caption: "No." },
    { value: "teamName", width: 100, caption: ["기본정보", "팀"] },
    { value: "c4", width: 100, caption: ["기본정보", "사번"] },
    { value: "c5", width: 100, caption: ["기본정보", "이름"] },
    { value: "c6", width: 120, caption: ["기본정보", "출생년도"] },
    { value: "c7", width: 100, caption: ["기본정보", "나이"] },
    { value: "c8", width: 100, caption: ["기본정보", "최종학력"] },
    {
      value: "c9",
      width: 100,
      caption: ["기본정보", "입사 일자"],
      style: style,
    },
    { value: "c10", width: 100, caption: ["기본정보", "호봉"] },
    { value: "c11", width: 100, caption: ["기본정보", "직위"] },
    { value: "c12", width: 100, caption: ["기본정보", "연차"] },
    { value: "c14", width: 120, caption: ["승급년수 충족여부", "승진 예정일"] },
    { value: "c15", width: 120, caption: ["승급년수 충족여부", "정기"] },
    { value: "c16", width: 120, caption: ["승급년수 충족여부", "지연"] },
    { value: "c17", width: 120, caption: ["승급년수 충족여부", "특별"] },
    { value: "c18", width: 100, caption: ["승급필요점수 달성여부", "충족"] },
    { value: "c19", width: 100, caption: ["승급필요점수 달성여부", "미달"] },
    {
      value: "c20",
      width: 100,
      caption: ["승급필요점수 달성여부", "미달사유"],
    },
    { value: "c21", width: 100, caption: ["최근 인사평가 점수", "2018"] },
    { value: "c22", width: 100, caption: ["최근 인사평가 점수", "2019"] },
    { value: "c23", width: 100, caption: ["최근 인사평가 점수", "2020"] },
    { value: "c24", width: 100, caption: ["최근 인사평가 점수", "2021"] },
    { value: "c25", width: 100, caption: ["최근 인사평가 점수", "2022"] },
    { value: "c26", width: 100, caption: ["최근 인사평가 점수", "2023"] },
    { value: "c27", width: 140, caption: ["평균", "등급(최근2년)"] },
  ]);
  myView.fetch().then(function () {
    sheet.setDataView(myView);
    sheet.togglePinnedColumns([0, 1, 2, 3, 4]);
  });

  spread.resumePaint();
}

function getData() {
  let arr = [];

  for (var i = 1; i < 150; i++) {
    var obj = {};
    obj.c1 = i;
    obj.c3 = ["정보IT팀", "기획팀", "경영관리팀", "인사총무팀"][
      Math.floor(Math.random() * 4)
    ];
    obj.c4 = Math.floor(Math.random() * (24000000 - 21000000)) + 21000000;
    obj.c5 =
      ["김", "강", "고", "박", "윤", "이"][Math.floor(Math.random() * 6)] +
      "OO";
    var age = "19" + (Math.floor(Math.random() * (99 - 50)) + 50);
    obj.c6 = age;
    obj.c7 = 2024 - age;
    obj.c8 = ["대학교", "전문대학", "대학원", "고등학교"][
      Math.floor(Math.random() * 4)
    ];
    obj.c9 = getRandomDate(new Date(2000, 1, 1), new Date());
    obj.c10 = Math.floor(Math.random() * 50) + 1;
    var level = getRandomArrayElement([
      ["부장(S3)", "[미대상]"],
      ["사원(J1)", "26년 사원(J2)"],
      ["사원(J2)", "28년 사원(J3)"],
      ["사원(J3)", "27년 대리(J4)"],
      ["대리(J4)", "30년 대리(J5)"],
    ]);
    obj.c11 = level[0];
    obj.c12 = Math.floor(Math.random() * 10);
    obj.c14 = level[1];
    var a = getRandomArrayElement([
      ["-", "-", "-", "-", "-", "-"],
      ["-", "O", "-", "-", "O", "호봉"],
      ["-", "O", "-", "-", "O", "누적"],
      ["-", "O", "-", "O", "-"],
    ]);
    obj.c15 = a[0];
    obj.c16 = a[1];
    obj.c17 = a[2];
    obj.c18 = a[3];
    obj.c19 = a[4];
    obj.c20 = a[5];
    var b = getRandomArrayElement([
      ["-", "-", "-", "-", "-", "-", "D"],
      ["B", "A", "A", "A", "S", "B", "A"],
      ["-", "-", "-", "-", "A", "B", "B+"],
      ["-", "-", "-", "S", "A", "A", "A"],
    ]);
    obj.c21 = b[0];
    obj.c22 = b[1];
    obj.c23 = b[2];
    obj.c24 = b[3];
    obj.c25 = b[4];
    obj.c26 = b[5];
    obj.c27 = b[6];

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
