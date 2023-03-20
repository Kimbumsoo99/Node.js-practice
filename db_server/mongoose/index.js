import mongoose from "mongoose";

mongoose.connect("mongodb://root:1234@localhost:27017/admin", {
  dbName: "dev",
});

const handleOpen = () => console.log("✅ Connected to DB");

mongoose.connection.once("open", handleOpen);

mongoose.connection.on("error", (error) => {
  console.error("MongoDB 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("MongoDB 연결이 종료되어 연결 재시도합니다.");
  connect();
});
