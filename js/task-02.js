const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsListItem = ingredients => ingredients.map(ingredient => {
    const ingredientsListEl = document.createElement("li");
    ingredientsListEl.textContent = ingredient;
    ingredientsListEl.classList.add("ingredient");
    return ingredientsListEl;
  });


const ingredientsEl = ingredientsListItem (ingredients);
ingredientsList.append(...ingredientsEl);
