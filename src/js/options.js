const mainSelect = document.getElementById("main-select");

let clickedBreed;

const addSelectOptions = (allBreedsData) => {
  const allBreeds = Object.keys(allBreedsData.message);
  const fragment = document.createDocumentFragment();
  allBreeds.forEach((element) => {
    const newOption = document.createElement("option");
    newOption.value = element;
    newOption.textContent = element;
    fragment.append(newOption);
  });
  mainSelect.append(fragment);
  mainSelect.addEventListener("change", (e) => {
    clickedBreed = e.target.value;
    console.log(clickedBreed);
  });
};

export { addSelectOptions, clickedBreed };
