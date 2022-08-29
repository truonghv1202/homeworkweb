// 1. Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)

const p = document.querySelector(".paragraph");
const text = p.textContent.split(" ");

const divHighlight = document.createElement("div");
divHighlight.classList.add("highlight");

document.querySelector(".paragraph").before(divHighlight);

for (let i = 0; i < text.length; i++) {
  let words = text[i];
  words = document.createElement("div");
  words.innerHTML = text[i];

  document.querySelector(".highlight").appendChild(words);

  if (text[i].length >= 8) {
    words.classList.add("color-yellow");
  }

  // xóa các node không cần thiết
  if (text[i] === "" || text[i] === "\n") {
    words.remove();
  }
}
const nodeList = document.querySelectorAll(".color-yellow");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.color = "yellow";
}

document.querySelector(".highlight").style.display = "flex";
document.querySelector(".highlight").style.flexWrap = "wrap";
document.querySelector(".highlight").style.columnGap = "4px";

// 2. Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p

const a = document.createElement("a");
a.href = "https://www.facebook.com/";

a.innerHTML = "facebook";

a.classList.add("link");

document.querySelector(".paragraph").after(a);

// 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const div = document.createElement("div");

div.classList.add("numbers-paragraph");

document.querySelector(".link").after(div);

let count = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i] === "" || text[i] === "\n") {
    count++;
  }
}

div.innerHTML = "Số từ có trong đoạn văn: " + (text.length - count);

// 4. Thay thế các ký hiệu ? => 🤔, ! => 😲

let arr = p.textContent.split("");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "?") {
    arr.splice(i, 1, "🤔");
  } else if (arr[i] === "!") {
    arr.splice(i, 1, "😲");
  }
}

const newP = document.createElement("p");

newP.classList.add("new-paragraph");

document.querySelector(".numbers-paragraph").after(newP);

newP.innerHTML = arr.join("");
