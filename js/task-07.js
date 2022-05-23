// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
  input: document.querySelector("#font-size-control"),
  outputText: document.querySelector("#text"),
};

function onInput() {
  const fontSize = refs.input.value;
  refs.outputText.style.fontSize = `${fontSize}px`;
}

refs.input.addEventListener("input", onInput);
document.addEventListener("DOMContentLoaded", onInput);