const refs = {
  inputEl: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.createBtn.addEventListener("click", () =>
  createBoxes(refs.inputEl.value));

function createBoxes(amount) {
  const boxStart = 30;
  
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = boxStart + i * 10 + "px";
    boxEl.style.height = boxStart + i * 10 + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    
    refs.boxesEl.appendChild(boxEl);
  }
}

refs.destroyBtn.addEventListener("click", function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.inputEl.value = 0;
});