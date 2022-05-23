// Задание 10 
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX. 

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  inputEl: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.destroyBtn.addEventListener("click", function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.inputEl.value = 0;
});