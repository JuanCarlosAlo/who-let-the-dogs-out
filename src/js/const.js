import { fetchData } from "./utility";

const allBreedsLink = "https://dog.ceo/api/breeds/list/all";

const getAllBreeds = async () => {
  const allBreeds = await fetchData(allBreedsLink);
  return allBreeds;
};

const getrandomPictureBreed = async (breed) => {
  const allBreeds = await fetchData(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  return allBreeds;
};

export { getAllBreeds, getrandomPictureBreed };
