const $get = document.getElementById("get__btn");
const $post = document.getElementById("post__btn");
const $put = document.getElementById("put__btn");
const $delete = document.getElementById("delete__btn");

const handleGet = () => {
  console.log("GET 요청");

  fetch("http://localhost:3000/comments")
    .then((response) => response.json())
    .then((json) => console.log(json)); //전체 조회

  fetch("http://localhost:3000/comments/1")
    .then((response) => response.json())
    .then((json) => console.log(json)); //id 조회

  fetch("http://localhost:3000/comments?postId=1")
    .then((response) => response.json())
    .then((json) => console.log(json)); //query 조회
};

const handlePost = () => {
  console.log("POST 요청");

  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "The Great",
      author: "Jeremy",
    }),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const handlePut = () => {
  console.log("PUT 요청");

  fetch("http://localhost:3000/posts/2", {
    method: "PUT",
    body: JSON.stringify({
      id: 2,
      title: "The Great Jeremy",
      author: "Jeremy",
    }),
    headers: { "content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const handleDelete = () => {
  console.log("DELETE 요청");

  fetch("http://localhost:3000/posts/2", { method: "DELETE" });
};

$get.addEventListener("click", handleGet);
$post.addEventListener("click", handlePost);
$put.addEventListener("click", handlePut);
$delete.addEventListener("click", handleDelete);
