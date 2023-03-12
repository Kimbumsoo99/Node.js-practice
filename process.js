import process from "process";
// Process 이벤트

process.on("beforeExit", (code) => {
  console.log(
    "2. 이벤트 루프에 등로괸 작업이 모두 종료된 후 노드 프로세스를 종료하기 직전: ",
    code
  );
});

process.on("exit", (code) => {
  console.log("3. 노드프로세스가 종료될 때: ", code);
});

// console.log(process.env);
console.log("1. 콘솔에 출력되는 첫 번째 메시지");

const { nextTick } = process;

console.log("start");

setTimeout(() => {
  console.log("time out callback");
}, 0);

nextTick(() => {
  console.log("nextTick callback");
});

console.log("end");

// process.exit() 은 서버 종료
// import os from "os"; OS 관련 유틸 및 함수
// const os = require("os")랑 비슷

// import path from "path"; //파일과 디렉터리 경로 작업을 위한 유틸리티
console.log(process.env.PATH);
