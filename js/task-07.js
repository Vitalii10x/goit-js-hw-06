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