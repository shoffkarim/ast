/* eslint-disable class-methods-use-this */
class ShowPoint {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-show-point")) {
      const btns = document.querySelectorAll(".js-show-point");
      btns.forEach((btn) => btn.addEventListener("click", function (e) {
        e.preventDefault();
        let id = btn.dataset.id;
        document.querySelector(".ymaps-2-1-78-placemark-overlay").focus();
      }));
    }
  }
}

export default ShowPoint;