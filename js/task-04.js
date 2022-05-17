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
