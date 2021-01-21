import { AddItem } from './AddItem.js';
export class AddRow {
  constructor(mp, elements) {
    // Array with random numbers
    this.arr = [1, 2, 5, 10, 50];

    // create rows with elements
    this.mkRows(mp, elements);

  }

  // get and return number from array
  mkRandomNr() {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }


  // create tags and add classes
  mkTag(tagName, ...classes) {
    // create tag
    let tag = document.createElement(tagName);

    // add classes
    for (let className of classes) {
      tag.classList.add(className);
    }

    // return tag
    return tag;
  }


  // loop for creating rows
  mkRows(mp, elements) {
    for (let i = 0; i < elements; i++) {

      // create tag row
      this.row = this.mkTag("div", "row");

      // create and add elements (squares) in row
      this.mkItems(this.row, elements);

      // mount row
      mp.appendChild(this.row);
    }
  }


  // loop for creating element and add to row
  mkItems(mp, elements) {
    for (let i = 0; i < elements; i++) {
      new AddItem(this.row, this.mkRandomNr());
    }
  }
}
