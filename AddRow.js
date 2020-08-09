import { AddItem } from './AddItem.js';
export class AddRow {
  constructor(mp, elements) {
    // массив для випадкового числа
    this.arr = [1, 2, 5, 10, 50];

    // створєюмо рядки з елементами
    this.mkRows(mp, elements);

  }

  // знайти випадкове число 0-4 і повернення числа за індексу з массиву
  mkRandomNr() {
    return this.arr[Math.floor(Math.random() * 5)];
  }


  // створення тегу і додавання класів
  mkTag(tagName, ...classes) {
    // робимо елемент
    let tag = document.createElement(tagName);

    // додаємо класси
    for (let className of classes) {
      tag.classList.add(className);
    }

    // повертаємо елемент
    return tag;
  }


  // цикл з створенням рядків
  mkRows(mp, elements) {
    for (let i = 0; i < elements; i++) {

      // створення тегу рядок
      this.row = this.mkTag("div", "row");

      // створюємо і додаємо елементи в рядок
      this.mkItems(this.row, elements);

      // монтуємо рядок
      mp.appendChild(this.row);
    }
  }


  // цикл з створенням елементів і додаванням в рядок
  mkItems(mp, elements) {
    for (let i = 0; i < elements; i++) {
      new AddItem(this.row, this.mkRandomNr());
    }
  }
}
