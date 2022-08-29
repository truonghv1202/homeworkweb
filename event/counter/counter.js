// Giá trị mặc định của counter ban đầu = 0

// Bấm vào Cộng tăng counter lên 1

// Bấm vào Trừ giảm counter đi 1

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red

let count = 0;

function handClickPrevBtn() {
  count--;
  document.getElementById("counter").innerHTML = count;
  if (count == 0) {
    document.getElementById("counter").style.color = "#333333";
  } else if (count > 0) {
    document.getElementById("counter").style.color = "green";
  } else {
    document.getElementById("counter").style.color = "red";
  }
}

function handClickNextBtn() {
  count++;
  document.getElementById("counter").innerHTML = count;
  if (count == 0) {
    document.getElementById("counter").style.color = "#333333";
  } else if (count > 0) {
    document.getElementById("counter").style.color = "green";
  } else {
    document.getElementById("counter").style.color = "red";
  }
}
