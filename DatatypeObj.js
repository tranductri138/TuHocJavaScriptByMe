// key : value

let person = {
  name: "Tris",
  address: "Ha Noi",
};
console.log(typeof person);

let aa = () => {
  console.log(
    "🚀 ~ file: DatatypeObj.js ~ line 12 ~ aa ~ as tris dep zai hihi"
  );
};
console.log("🚀 ~ file: DatatypeObj.js ~ line 15 ~ aa ~ aa", typeof aa);
aa();

let tris = {
  name: "tris",
  age: 23,
  email: "tritocao@gmail.com",
};
console.log("🚀 ~ file: DatatypeObj.js ~ line 22 ~ tris", tris.name);
// this is object :v

let b = "name";
tris[b] = "tris dep zai so ciu";
// hằng số b khi muốn nó là động
// nếu biết chắc chắn thuộc tính nào thay đổi thì dùng tris.name
console.log("🚀 ~ file: DatatypeObj.js ~ line 26 ~ tris[b]", tris[b]);

// obj là dc lưu theo các cặp key và value
