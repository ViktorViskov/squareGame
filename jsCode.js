import { AddRow } from "./AddRow.js";

// start game
function newGame() {
  // search mp (mount point)
  let container = document.querySelector(".container");

  // if not mp not found, create new
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
  // else remove current and create new, after mount wrapper and update game result
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



// add event
let btn = document.querySelector(".newGame");

btn.addEventListener("click", () => {newGame()});
