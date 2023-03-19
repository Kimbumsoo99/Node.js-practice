import mongoose from "mongoose";

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
};

mongoose.connect(
  "mongodb://root:1234@localhost:27017/admin",
  {
    dbName: "dev",
  },
  (error) => {
    if (error) {
      console.error("MongoDB 연결 에러", error);
    } else {
      console.log("MongoDB 연결 성공", "localhost:27017/admin");
    }
  }
);

mongoose.connection.on("error", (error) => {
  console.error("MongoDB 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("MongoDB 연결이 종료되어 연결 재시도합니다.");
  connect();
});

export default connect;
