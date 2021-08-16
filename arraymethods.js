let tris = [
    {
        id : 1 , 
        name : "js"
    },
    {
        id : 2 , 
        name : "node js "
    }
];
const a = function(tris,i){

    return {
        id : tris.id,
        name : `Khoa hoc : ${tris.name}`,
        index : i
        
    }
}
let newTris  = tris.map(a)
console.log("🚀 ~ file: arraymethods.js ~ line 19 ~ newTris", newTris)
 

//  phương thức map chỉ là đơn giản gọi 1 vòng for trả về đầy đủ các element và trả về trong func 
// func return cái j thì sẽ có thể dùng cái đấy


let arra = [1,2,3,1,2]

let newArra = arra.map(x => x);
console.log("🚀 ~ file: arraymethods.js ~ line 34 ~ newArra", newArra)
