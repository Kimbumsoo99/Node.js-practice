// WHATWG 방식
const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
);
console.log(myURL);

//Node.js의 레거시 API
import url from "url";
console.log(
  url.parse("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash")
);
