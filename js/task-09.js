function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};

const bodyColor = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

const changeBtnColor = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorName.textContent = bodyColor.style.backgroundColor
};

btnColor.addEventListener("click", changeBtnColor);