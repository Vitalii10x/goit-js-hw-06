// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};

const nameInput = "Anonymous";

function onInput (event) {
    const userInput = event.currentTarget.value;

    if (userInput === "") {
        refs.output.textContent = nameInput;
    } else {
        refs.output.textContent = userInput;
    }
}

refs.input.addEventListener("input", onInput);
