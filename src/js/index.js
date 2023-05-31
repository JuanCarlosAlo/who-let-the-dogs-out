// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { createImgElementNew, createImgElementSaved } from "./bookmarked";
import { getAllBreeds, getrandomPictureBreed } from "./const";
import { addSelectOptions, clickedBreed } from "./options";
const LS = localStorage;
const randomPictureButton = document.getElementById("random-picture");

window.addEventListener("load", async (e) => {
  const allBreedsData = await getAllBreeds();
  addSelectOptions(allBreedsData);
  const savedImgs = JSON.parse(LS.getItem("savedImgs"));
  console.log(savedImgs);
  if (savedImgs !== null) {
    createImgElementSaved(savedImgs);
  }
});

randomPictureButton.addEventListener("click", async (e) => {
  const randomPicture = await getrandomPictureBreed(clickedBreed);

  createImgElementNew(randomPicture.message);
});
