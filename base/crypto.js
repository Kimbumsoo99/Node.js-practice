// 암호화 기능을 제공하는 모듈
import crypto from "crypto";
const cryptoV1 = crypto.createHash("sha512").update("pw1234").digest("base64");
const cryptoV2 = crypto.createHash("sha512").update("pw1234").digest("hex");

console.log(`base64 방식 : ${cryptoV1}`);
console.log(`hex 방식 : ${cryptoV2}`);

const createSalt = () =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      //randomBytes를 통해 64byte의 salt 생성
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
//pdkdf2() 함수를 사용하여 암호화

const createCryptoPassword = async (plainPassword) => {
  const salt = await createSalt();

  return new Promise((resolve, reject) => {
    // 암호 문자열, salt, 반복 횟수, 출력 byte, 해시알고리즘
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

const getCryptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

createSalt().then(function (data) {
  console.log(`Salt 값 : ${data}`);
});
createCryptoPassword("qwe123")
  .then(function ({ password, salt }) {
    console.log(`암호화한 Password 값 : ${password}`);
    console.log(`사용된 Salt 값 : ${salt}`);
    return salt;
  })
  .then(function (salt) {
    console.log(`인자로 넘어온 Salt 값 : ${salt}`);
    getCryptoPassword("qwe123", salt).then(function ({ password, salt }) {
      console.log(`암호화한 Password 값 : ${password}`);
      console.log(`사용된 Salt 값 : ${salt}`);
    });
  });
