import express from "express";
import customerRoute from "./routes/customer";
import productRoute from "./routes/product";
import cookieSession from "cookie-session";
import session from "express-session";
import cors from "cors";
import fs from "fs";
import path from "path";
import morgan from "morgan";

var fileStore = require("session-file-store")(session);

const app = express();

const port = 5000;
const appUrl = `http://localhost:${port}`;

const corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200,
};

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);

app.listen(port, () => {
  console.log(`서버 접속 ${appUrl} 🚀`);
});

app.use(morgan("combined", { stream: accessLogStream })); //로그로 기록 남기기

// 에러처리 핸들러 미들웨어
app.use((err, req, res, next) => {
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
});

app.use(express.static("public")); //public 폴더에 정적 파일을 URL로 제공
// http://localhost:5000/images/logo.jpg 이런식
app.use("/static", express.static("files"));
// 정적 폴더 파일을 여러개 만들어도 상관 X , 앞에 경로를 붙이는것도 가능

//body-parser 사용 예시 (Express 내장으로 사용)
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());
app.use(
  express.json({
    limit: "50mb", //최대 50MB
  })
); //클라이언트 요청 body를 json으로 파싱 처리

// // 클라이언트 쿠키에 세션 저장
// app.use(
//   cookieSession({
//     name: "session",
//     keys: [
//       /*비밀키*/
//     ],
//     maxAge: 24 * 60 * 60 * 1000, //24시간 유지
//   })
// );

const fileStoreOptions = {};

// 서버 세션 저장
app.use(
  session({
    secret: "secret key", //암호화 키
    resave: true, //변경 사항이 없어도 항상 다시 저장할지
    saveUninitialized: true, //초기화되지 않은 세션을 store에 강제 저장할 지 여부
    cookie: {
      //세션 쿠키 설정
      httpOnly: true, //true면 클라이언트 JS에서 document.cookie로 쿠키 정보를 볼 수 없음
      secure: true, //https 환경에서만 쿠키 정보 주고 받음
      maxAge: 60000, //쿠키 유지 시간
    },
    store: new fileStore(fileStoreOptions), //세션 저장소로 fileStore 사용 (근데 안됨)
  })
); //메모리는 휘발성이기 때문에 메모리보다는 물리적 DB혹은 파일로 저장하는것이 좋음

app.use(cors(corsOptions)); //cors 모든 라우터 적용 또는 특정 라우터에만 적용도 시킬 수 있다.

app.use("/customer", customerRoute);
app.use("/product", productRoute);

app.get("/", (req, res) => {
  console.log(req.session);
  res.send("Hello World!");
});

app.get("/error", (req, res) => {
  throw new Error("에러 발생"); //라우트에서 에러 발생시 익스프레스 처리
  //클라이언트 500 에러 코드 및 에러 정보
});

app.get("/error2", (req, res, next) => {
  next(new Error("에러 발생")); //next를 통해 에러 처리 핸들러로전달
});

app.post("/login", (req, res, next) => {
  const { email, pw } = req.body.param;
  // DB의 사용자 테이블 로그인 인증 처리 코드 작성
  // 사용자 존재하면
  req.session.email = email; // 세션 사용자 이메일 저장
  req.session.is_logined = true; // 세션 로그인 여부 저장
  req.session.save((err) => {
    // 세션 저장
    if (err) throw err;
    res.redirect("/home"); // 로그인 후 홈화면 이동
  });
});

app.post("/logout", (req, res, next) => {
  req.session.destroy(); // 함수 사용해서 세션 삭제
  res.redirect("/login"); // 로그인 페이지 이동
});
