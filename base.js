// 기본 문법
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
// 1번째 요소와 2번째 요소 비교 (40 - 100 = -60)
// 음수이면 두 위치 요소 변경 X
// 양수이면 두 위치 요소 변경 O
// 반복하면서 위치 조정
// 내림차 순은 b - a 또는 .reverse()
console.log(points);

// 사용 예시
let persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "안양",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

persons.sort(function (a, b) {
  return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
});

console.log(persons);

// filter()
// arr.filter(callback(element[, index[, array]])[, thisArg])
// 특정 조건 체크, 통과 시 요소 유지 false시 버림

let pass = persons.filter(function (person) {
  return person.point >= 80;
});
console.log(pass);

let userList = [
  {
    firstName: "재석",
    lastName: "유",
    email: "yu@email.com",
  },
  {
    firstName: "종국",
    lastName: "김",
    email: "kim@email.com",
  },
  {
    firstName: "세찬",
    lastName: "양",
    email: "ya@email.com",
  },
  {
    firstName: "하",
    lastName: "하",
    email: "ha@email.com",
  },
];

let userList2 = userList.map(function (user) {
  return {
    fullNam: user.lastName + user.firstName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
});
console.log(userList2);

console.log(points);
// reduce
// 1 : 누적 값, 2 : 현재 배열 요소, 3: 인덱스 번호, 4 : 배열
let sum = points.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);
console.log(sum);

function getCoordinates() {
  return [86, 78];
}
let [longitude, latitude] = getCoordinates();
console.log(`경도 : ${longitude}, 위도 : ${latitude}`);

function say(message = "전달된 메세지가 없습니다.") {
  console.log(message);
}

say();
say("말");
