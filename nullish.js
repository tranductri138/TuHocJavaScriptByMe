

// result = (a !== null && a !== undefined) ? a : b;
// console.log(result);
// toán tử nullish ?? cung cấp một cú phát ngắn để chọn một biến đầu tiên được định nghĩa có giá trị từ danh sâch


let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// show the first not-null/undefined variable
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


// || trả về giá trị đúng đầu tiên 
// ??  trả về giá trị được gxác định (có giá trị đầu tiên )


// set height=100, if height is null or undefined height = height ?? 100;
