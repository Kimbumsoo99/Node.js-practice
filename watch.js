let db = require("json/db.json");

fs.watchFile(__dirname + "/json/db.js", (curr, prev) => {
  console.log("변경 시 재시작 없이 반영되도록 함.");
  delete require.cache[require.resolve("json/db.json")];
  db = require("json/db.json");
});
// sql.js 파일에 변경이 일어날 때마다 sql.js 재할당하는 코드
