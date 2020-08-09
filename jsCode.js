import { AddRow } from "./AddRow.js";

// запуск гри
function newGame() {
  // пошук точки монтування
  let container = document.querySelector(".container");

  // якщо брехня створюємо новий і монтуємо в обгортку
  if (!container) {
    let wrapper = document.querySelector(".wrapper");

    let newContainer = document.createElement("div");
    newContainer.classList.add("container");

    new AddRow(newContainer, 9);

    wrapper.appendChild(newContainer);

    let score = document.querySelector(".score");
    score.textContent = 0;

    let attemps = document.querySelector(".attemps")
    attemps.textContent = 10;
  }
  // інакше видаляємо і створюємо новий і монтуємо в обгортку обновляємо результати гри
  else {
    container.remove();

    let wrapper = document.querySelector(".wrapper");

    let newContainer = document.createElement("div");
    newContainer.classList.add("container");

    new AddRow(newContainer, 9);

    wrapper.appendChild(newContainer);

    let score = document.querySelector(".score");
    score.textContent = 0;

    let attemps = document.querySelector(".attemps")
    attemps.textContent = 10;
  }
}



// обробка подій
let btn = document.querySelector(".newGame");

btn.addEventListener("click", () => {newGame()});