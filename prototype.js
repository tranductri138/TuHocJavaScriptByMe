// Prototype là một khái niệm cốt lõi cơ bản trong JS khá quan trọng để thực thi OOP 
// trong js . Vì js là một prototype-base language , không có khái niệm clas như các 
// ngôn ngữ hướng đói tượng khác .

// Prôttype là cơ chế mà các obj trong js kế thừa các tính năng từ một obj khác 
// Tất cả các obj trong js đều có một prototype , và các obj này kếy thừa các 
// thuộc tính (properties) cũng như phương thức ( methods) từ prototype của mình 
// Bạn cần chú ý rằng bản thân prototype clà một obj trong js , được gọi là
//  prototype trong js , được gọi là prototype obj (đối tượng prototype) 
// Chúng ta cần biết điều này để tránh nhầm lẫn với các thuộc tính prototype 
// của function 

// 1.Trong js một hàm ( function ) cx được gọi coi là 1 obj . Và hàm có thuộc tính gọi là 
// thuọc tính prototype , bản thân thuộc tính prototype này mang giá trị là 1 obj 
// 2. Nếu ta dùng hàm đeẻ tạo ra 1 mẫu khởi tạo đối tượng , thì bạn có thể thêm được các thuộc tính
// hoặc phương thức vào thuộc tính prototype của hàm khởi tạo để thực hiện kế thừa . All các obj con tạo
// ra bởi hàm khởi tạo đèu mang gigá trị thuộc trính prototype của hàm này 
// 3 .  các obj trong js có một khái niệm gọi là prototype attribute đặc tính này có giá trị
// trỏ tới prototype obj mà nó kế thừa thuộc tính . Ta dùng thuộc tính __proto__ để truy cập tới 
// prototype obj 

function Person(_age, _name){
    this.age = _age;
    this.name = _name;
 }
  
 //Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
 Person.prototype.height = 0;
  
 //Tạo ra 1 instance của Person
 //Có cả 3 thuộc tính của mẫu khởi tạo Person
 var jack_person = new Person(10, "Jack");
 for (var att in jack_person){
    console.log(att);
 }
  
 //Xem đối tượng prototype của instance vừa tạo
 jack_person.__proto__;
 
// Event-driven programming là mô hình chủ yếu được sử dụng trong các ứng dụng tập trung vào việc đưa ra các xử lý phản hồi
// lại các thao tác của ng dùng
 //  trong một ứng dụng hướng sự kiện , thường có 1 vòng lặp chính gọi là main loop lắng nghe các sự kiện và sau đó kích hoạt 
 // lời gọi đến các callback function (*) khi phát hiện một sự kiện nào đó xảy ra . Trong các hệ thống nhúng , điều tương tự có thể đạt 
 // bằng cá cách sử dụng các ngắn phần cứng thay vì một main loop chạy liên tục . Các chương trình hướng sử kiện có thể được viết 
 // bằng bất cứ ngôn ngữ lập trình nào cứng
 // Call back func là hàm hoặc bất kỳ đoạn mã thực được truyền vào như là một đối số cho mã khác sẽ được gọi( thực thi ) tại một 
// thời điểm nhất định hoặc khi có sự kiện nào đó xảy ra c