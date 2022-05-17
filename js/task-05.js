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
