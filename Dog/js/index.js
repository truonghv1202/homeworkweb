import * as api from "./api.js";
import * as dog from "./dog.js";

const breedList = document.querySelector("select");
const btn = document.querySelector("button");
const subBreedList = document.querySelector(".sub-breeds-list");

api.getAllBreeds().then(({ data: { message } }) => {
  // {african: [], honund: []}
  // Chuyen doi du lieu trong massage thanh cac option va render vao breedList
  //   Object.key(obj); [african, hound]

  breedList.append(...Object.keys(message).map(dog.createOption));
});

//gan su kien cho nut
// khi ma click thi goi API sub breed
btn.addEventListener("click", () => {
  api
    .getSubBreed(breedList.value)
    .then(({ data: { message } }) => dog.createSubBreedList(message))
    .then((subBreeds) => {
      subBreedList.innerHTML = "";
      subBreedList.append(...subBreeds);
    });
});
