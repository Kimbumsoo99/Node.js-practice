// 암호화 기능을 제공하는 모듈
const crypto = require("crypto");
const cryptoV1 = crypto.createHash("sha512").update("pw1234").digest("base64");
const cryptoV2 = crypto.createHash("sha512").update("pw1234").digest("hex");

console.log(cryptoV1);
console.log(cryptoV2);
