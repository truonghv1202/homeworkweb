// Cho mảng chứa danh sách các loại quả
const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];

// Tạo 1 thẻ <li> tương ứng với mỗi loại quả, hiển thị danh sách vào <ul>

for (let i = 0; i < fruitList.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = fruitList[i];
  document.querySelector(".fruit-list").appendChild(li);
}
