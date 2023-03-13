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

app.use("/customer", customerRoute);
app.use("/product", productRoute);
