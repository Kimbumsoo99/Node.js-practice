import express from "express";
const router = express.Router();

// 고객정보 조회
router.get("/", (req, res) => {
  res.send("product 라우트 루트");
});

// 고객정보 추가
router.post("/insert", (req, res) => {
  res.send("/product/insert 라우트");
});

// 고객정보 수정
router.put("/update", (req, res) => {
  res.send("/product/update 라우트");
});

// 고객정보 삭제
router.delete("/delete", (req, res) => {
  res.send("/product/delete 라우트");
});

export default router;
