const form = document.querySelector(".login-form");

function formSubmit(event) {
  event.preventDefault();
  
    const { elements: { email, password } } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Заполните все поля");
    }
  
  console.log({ [email.name]: email.value, [password.name]: password.value });

  event.currentTarget.reset();
};

form.addEventListener("submit", formSubmit);

