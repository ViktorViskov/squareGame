export class AddItem {
  // запуск коду при створенні класу
  constructor(mp, point) {
    // обробка данних
    this.makePoint(point);
    this.obj = this.searchingItems();

    // створюємо елемент
    this.item = this.mkTag("div", "item", "uknown");

    // додаємо обробку подій
    this.item.addEventListener(
      "click",
      () => {
        this.btnLogik();
      },
      false
    );

    // монтуємо елемент
    mp.appendChild(this.item);
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

  // логіка натиску (зменшення спроб додавання балів відкриття і блокування елементу)
  btnLogik() {
    if (this.checkAttemps() && this.isAvaible) {
      // зменшення спроб
      this.attemps.textContent--;

      // додавання балів
      this.score.textContent = this.point + Number(this.score.textContent);

      // відкриття очків
      this.item.textContent = this.point;

      // додаємо відповідний класс
      this.item.classList.add(this.pointClass);

      // видалення классу для скриття
      this.item.classList.remove("uknown");

      // блокування на повторне використання
      this.isAvaible = false;
      
    }
  }

  // пошук елементів для виведення результатів (спроби і бали)
  searchingItems() {
    this.attemps = document.querySelector(".attemps");
    this.maxAttemps = document.querySelector(".maxAttemps");

    this.score = document.querySelector(".score");
    this.maxScore = document.querySelector(".maxScore");
  }

  // перевірка на кількість спроб
  checkAttemps() {
    let attemps = document.querySelector(".attemps");
    return Number(attemps.textContent) > 0 ? true : false;
  }

  // створення балів на елемент запис елементу isAvaible
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
