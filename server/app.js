import express from "express";

const app = express();
const port = 5000;
const appUrl = `http://localhost:${port}`;

const ex0 = (req, res, next) => {
  console.log("첫 번째 콜백 함수");
  next();
};

const ex1 = (req, res, next) => {
  console.log("두 번째 콜백 함수");
  next();
};

const ex2 = (req, res, next) => {
  res.send("세 번째 콜백 함수");
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/customer", (req, res) => {
  res.send("get 요청에 응답");
});

app.post("/customer", (req, res) => {
  res.send("post 요청에 응답");
});

app.get(
  "/example",
  (req, res, next) => {
    console.log("첫 번째 콜백 함수");
    next();
  },
  (req, res) => {
    res.send("두 번째 콜백 함수");
  }
);
app.get("/examples", [ex0, ex1, ex2]);
app.all("/customer/:id", (req, res) => {
  res.send("HTTP 요청 메소드 종류에 상관없이 응답");
});

app.listen(port, () => {
  console.log(`서버 접속 ${appUrl} 🚀`);
});
