const mainContainer = document.getElementById("main-container");
const LS = localStorage;
let bookmarked = [];

const filterObj = (arr, searchKey) => {
  return arr.filter((obj) => obj.id !== searchKey);
};

const createElement = (img, check) => {
  const timeStamp = Date.now();
  const newImg = document.createElement("div");
  newImg.classList.add("new-img");
  newImg.style.backgroundImage = `url(${img})`;
  newImg.id = timeStamp;
  const newBookmark = document.createElement("div");

  newBookmark.dataset.checked = check;
  if (newBookmark.dataset.checked === "unchecked") {
    newBookmark.classList.add("bookmark");
  } else {
    newBookmark.classList.add("bookmarked");
  }
  newImg.append(newBookmark);
  newBookmark.addEventListener("click", (e) => {
    console.log(e.target.parentElement);

    if (newBookmark.dataset.checked === "unchecked") {
      bookmarked.push({
        img: img,
        id: e.target.parentElement.id,
        checked: "checked",
      });
      newBookmark.classList.remove("bookmark");
      newBookmark.classList.add("bookmarked");
      newBookmark.dataset.checked = "checked";
    } else {
      newBookmark.classList.add("bookmark");
      newBookmark.classList.remove("bookmarked");
      newBookmark.dataset.checked = "unchecked";
      bookmarked = filterObj(bookmarked, e.target.parentElement.id);
    }
    LS.setItem("savedImgs", JSON.stringify(bookmarked));
    console.log(bookmarked);
  });
  return newImg;
};

const createImgElementNew = (img) => {
  const newImg = createElement(img, "unchecked");

  mainContainer.append(newImg);
};

const createImgElementSaved = (array) => {
  const fragment = document.createDocumentFragment();
  array.forEach((element) => {
    const newImg = createElement(element.img, "checked");
    fragment.append(newImg);
  });
  mainContainer.append(fragment);
};

export { createImgElementNew, createImgElementSaved };
