// Cho nội dung HTML như trên, thực hiện các yêu cầu sau:
// 1. Thay đổi nội dung của thẻ title thành giá trị của heading

const tit = document.querySelector("title");
tit.textContent = heading;

// 2. Thay đổi nội dung của thẻ h1 thành giá trị của heading\
const h1 = document.querySelector(".heading");
h1.textContent = heading;

// 3. Thay đổi src của thẻ img thành giá trị của avatar
const img = document.querySelector(".avatar");
img.src = avatar;
// 4. Thay đổi src của thẻ link thành giá trị của profile
const link = document.querySelector(".profile");
link.href = profile;

// 5. Thay đổi nội dung của thẻ li đầu tiên trong thẻ ul thành Code application
document.getElementsByTagName("li")[0].textContent = "Code application";

// 6. Thay đổi nội dung của thẻ li cuối cùng trong thẻ ul thành Sleep
const ul = document.querySelector(".favorite");

const list = ul.querySelectorAll("li");

document.getElementsByTagName("li")[list.length - 1].textContent = "Sleep";
// 7. Thay đổi nội dung của div thành thời gian hiện tại theo mẫu Bây giờ là giờ:phút:giây,
// ngày ngày/tháng/năm
let day = [];
let hour = [];
let now = new Date();

day.push(now.getDate());
day.push(now.getMonth() + 1);
day.push(now.getFullYear());
hour.push(now.getHours());
hour.push(now.getMinutes());
hour.push(now.getSeconds());

const time = document.querySelector(".clock");
time.textContent = "Bây giờ là: " + hour.join(":") + ", ngày " + day.join(":");

// 8. Đếm số từ trong đoạn văn p.bio xem có bao nhiêu từ Ba (không phân biệt chữ hoa chữ thường) và thêm nội dung vào thẻ p.num-of-words bên dưới thông báo kết quả dạng Ở đoạn văn trên có xx từ 'Ba'

const numbersBa = document
  .querySelector(".bio")
  .textContent.toLocaleLowerCase();

let count = numbersBa.split("ba").length - 1;

document.querySelector(".num-of-words").textContent =
  "Ở đoạn văn trên có " + count + " từ Ba";

// 9. Thêm một hàng mới vào table (tham khảo API của HTMLTableElement)
const element = document.querySelector(".list-students");
let number = element.childNodes.length;
let table = document.querySelector(".list-students");
let row = table.insertRow(number);

// 10. Thêm một cột (ô) mới vào hàng vừa tạo có nội dung Thầy giáo Ba siêu cấp đẹp trai
row.textContent = "Thầy giáo Ba siêu cấp đẹp trai";
