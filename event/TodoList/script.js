// Cho mảng todos chứa danh sách công việc cần làm, mỗi công việc có trạng thái completed cho biết đã hoàn thành hay chưa
const todos = [
  {
    id: 1,
    completed: true,
    content: "Learning HTML",
  },
  {
    id: 2,
    completed: true,
    content: "Learning CSS",
  },
  {
    id: 3,
    completed: false,
    content: "Learning JavaScript",
  },
];

// Tạo 1 thẻ <li> ứng với mỗi công việc, hiển thị nội dung công việc
// Hiển thị danh sách công việc vào <ul>
for (let i = 0; i < todos.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = todos[i].content;
  document.querySelector(".todo-list").appendChild(li);
  li.classList.add("content-todos");
}

// Nếu đã hoàn thành, thêm class để hiển thị gạch ngang nội dung
const nodeList = document.querySelectorAll(".content-todos");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.textDecoration = "underline";
  nodeList[i].style.padding = "20px";
  nodeList[i].style.listStyle = "none";
}

for (let i = 0; i < todos.length; i++) {
  for (let j = 0; j < nodeList.length; j++) {
    // Nếu đã hoàn thành, hiển thị kèm nội dung 1 nút 'Xóa'
    if (
      todos[i].completed == true &&
      todos[i].content.includes(nodeList[j].textContent)
    ) {
      const buttonErase = document.createElement("button");
      buttonErase.innerHTML = "Xóa";
      nodeList[j].appendChild(buttonErase);
    }

    // Nếu chưa hoàn thành, hiển thị kèm nội dung 1 nút 'Hoàn thành'
    else if (
      todos[i].completed == false &&
      todos[i].content.includes(nodeList[j].textContent)
    ) {
      const buttonComplete = document.createElement("button");
      buttonComplete.innerHTML = "Hoàn thành";
      nodeList[j].appendChild(buttonComplete);
    }
  }
}
