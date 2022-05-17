const inputEl = document.querySelector("#validation-input");

function onBlur(event) {
  const dataLength = Number(event.currentTarget.dataset.length);
  const userInput = event.currentTarget.value.length;

  if (dataLength === userInput) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
  else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onBlur);


