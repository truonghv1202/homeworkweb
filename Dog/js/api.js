const BREED_API = "https://dog.ceo/api/breeds/list/all";
const SUB_BREED_API = "https://dog.ceo/api/breed/subBreed/list";
const BREED_IMAGE_API = "https://dog.ceo/api/breed/masterBreed/images/random";

export const getAllBreeds = () => {
  return axios.get(BREED_API);
};

export const getSubBreed = (breed) => {
  return axios.get(SUB_BREED_API.replace("subBreed", breed));
};

export const getBreedRandomImage = (breed) => {
  return axios.get(BREED_IMAGE_API.replace("masterBreed", breed));
};
