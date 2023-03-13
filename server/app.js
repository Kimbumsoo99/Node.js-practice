import express from "express";
import customerRoute from "./routes/customer";
import productRoute from "./routes/product";
const app = express();

app.use(
  express.json({
    limit: "50mb", //최대 50MB
  })
); //클라이언트 요청 body를 json으로 파싱 처리

const port = 5000;
const appUrl = `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`서버 접속 ${appUrl} 🚀`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/error", (req, res) => {
  throw new Error("에러 발생"); //라우트에서 에러 발생시 익스프레스 처리
  //클라이언트 500 에러 코드 및 에러 정보
});

app.get("/error2", (req, res, next) => {
  next(new Error("에러 발생")); //next를 통해 에러 처리 핸들러로전달
});

// 에러처리 핸들러 미들웨어
app.use((err, req, res, next) => {
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
});

app.use("/customer", customerRoute);
app.use("/product", productRoute);
