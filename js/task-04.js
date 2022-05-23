// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const incrementBtn = document.querySelector("button[data-action='increment']");
const decrementBtn = document.querySelector("button[data-action='decrement']");

let counterValue = 0;

function onIncrementBtnClick() {
  counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
}

function onDecrementBtnClick() {
  counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
}

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);
