/* eslint-disable class-methods-use-this */
class Dropdown {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-toggle-container")) {
      const wraps = document.querySelectorAll(".js-toggle-container");
      wraps.forEach((function (wrap) {
        const btn = wrap.querySelector(".js-btn-toggle");
        const dropdown = wrap.querySelector(".js-dropdown");
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          btn.classList.toggle("btn-show");
          btn.classList.toggle("btn-hide");
          dropdown.classList.toggle("dropdown--hidden");
        });
      }));
    }
  }
}

export default Dropdown;