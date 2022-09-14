// Ham tao 1 option tuong ung voi breed
import { e } from "./utlis.js";
import { getBreedRandomImage } from "./api.js";

const breedList = document.querySelector("select");
const radomImage = document.querySelector(".random-image");

export const createOption = (breed /* african*/) => {
  // <option value = "african">African</option>

  return e("option", {
    value: breed,
    text: breed.slice(0, 1).toUpperCase() + breed.slice(1),
  });
};

const createSubBreed = (subBreed) =>
  e(
    "li",
    {},
    e(
      "a",
      {
        onclick: () => {
          getBreedRandomImage(breedList.value).then(({ data: { message } }) => {
            radomImage.innerHTML = `<img src = "${message}" />`;
          });
        },
      },
      subBreed
    )
  );

export const createSubBreedList = (subBreedList) => {
  if (subBreedList.length === 0) {
    return [e("li", {}, "No sub breeds")];
  } else {
    return subBreedList.map(createSubBreed);
  }
};
