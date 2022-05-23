// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const bodyColor = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

const changeBtnColor = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorName.textContent = bodyColor.style.backgroundColor
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnColor.addEventListener("click", changeBtnColor);