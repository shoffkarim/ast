/* eslint-disable class-methods-use-this */
class Popup {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-popup-open")) {
      const btnsOpen = document.querySelectorAll(".js-popup-open");
      btnsOpen.forEach((btn) => btn.addEventListener("click", function (e) {
        e.preventDefault();
        const typePopup = btn.dataset.popup;
        const popup = document.querySelector(`.js-popup[data-popup=${typePopup}]`);
        popup.classList.add("popup-open");
        document.body.classList.add("no-overflow");
      }));
      const btnsClose = document.querySelectorAll(".popup-close");
      btnsClose.forEach((btn) => btn.addEventListener("click", function (e) {
        e.preventDefault();
        const popup = btn.parentElement.parentElement;
        popup.classList.remove("popup-open");
        document.body.classList.remove("no-overflow");
      }));
    }
  }
}

export default Popup;