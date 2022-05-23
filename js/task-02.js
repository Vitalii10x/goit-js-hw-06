// Задание 2
// Напиши скрипт, который для каждого элемента массива ingredients:
// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul.ingredients.

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
