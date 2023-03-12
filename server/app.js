import express from "express";

const app = express();
const port = 5000;
const appUrl = `http://localhost:${port}`;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`서버 접속 ${appUrl} 🚀`);
});
