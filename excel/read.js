const xlsx = require("xlsx");

const workbook = xlsx.readFile("./xlsx/test.xlsx");

const firstSheetName = workbook.SheetNames[0]; //엑셀 파일의 첫번째 시트 이름 가져오기

const firstSheet = workbook.Sheets[firstSheetName];

const firstSheetJson = xlsx.utils.sheet_to_json(firstSheet);

console.log(firstSheetJson);
