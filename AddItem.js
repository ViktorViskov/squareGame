export class AddItem {
  // constructor for class
  constructor(mp, point) {
    // adding scores for squares and unlock game
    this.makePoint(point);
    this.obj = this.searchingItems();

    // create square tag and adding classes
    this.item = this.mkTag("div", "item", "uknown");

    // add event to square
    this.item.addEventListener(
      "click",
      () => {
        this.btnLogik();
      },
      false
    );

    // mounting square
    mp.appendChild(this.item);
  }

  // function for creating tag and adding classes
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

  // game logick (reducing attempts to add points to open and lock an item)
  btnLogik() {
    if (this.checkAttemps() && this.isAvaible) {
      // reduction of attempts
      this.attemps.textContent--;

      // adding points
      this.score.textContent = this.point + Number(this.score.textContent);

      // opening points
      this.item.textContent = this.point;

      // add the appropriate class for change interface
      this.item.classList.add(this.pointClass);

      // remove the class that hid the square
      this.item.classList.remove("uknown");

      // reuse lock
      this.isAvaible = false;
      
    }
  }

  // search for elements to display results (attempts and points)
  searchingItems() {
    this.attemps = document.querySelector(".attemps");
    this.maxAttemps = document.querySelector(".maxAttemps");

    this.score = document.querySelector(".score");
    this.maxScore = document.querySelector(".maxScore");
  }

  // check for the number of attempts
  checkAttemps() {
    let attemps = document.querySelector(".attemps");
    return Number(attemps.textContent) > 0 ? true : false;
  }

  // create points and unlock element
  makePoint(point) {
    this.isAvaible = true;
    switch (point) {
      case 1:
        this.point = 1;
        this.pointClass = "one";
        break;
      case 2:
        this.point = 2;
        this.pointClass = "two";
        break;
      case 5:
        this.point = 5;
        this.pointClass = "five";
        break;
      case 10:
        this.point = 10;
        this.pointClass = "ten";
        break;
      case 50:
        this.point = 50;
        this.pointClass = "fifty";
        break;
      default:
        break;
    }
  }
}
