// aray no sẽ quản lý theo index chứ ko phải các cặp key value nhưu obj
let teamFootball = ["ManU", "Chelsea", "Mancity"];
console.log(
  "🚀 ~ file: datatypearrays.js ~ line 3 ~ teamFootball",
  teamFootball
);
console.log("🚀 ~ file: datatypearrays.js ~ line 8 ~ b", typeof teamFootball);
// bản chất của aray là 1 obj nó sẽ thông qua index để lấy các elêmnent bên trong
// và trong array nó sẽ có các method khác và nhiều hơn 1 obj
// nó cx như obj key value còn ví dụ như aray theo index sẽ là teamFootball[0] : ManU
// giống same vs kiểu obj kv
// bản chất là 1 dữ liệu khác để giúp chúng ta lưu data
let teamFootball2 = [
  { name: "ManU", age: 123 },
  { name: "ManCity", age: 126 },
];
console.log(
  "🚀 ~ file: datatypearrays.js ~ line 17 ~ teamFootball2",
  teamFootball2
);
