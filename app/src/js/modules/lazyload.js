/* eslint-disable class-methods-use-this */
class Lazyload {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".lazyload")) {
      const list = document.querySelectorAll(".lazyload");
      list.forEach(function (item) {
        const src = item.dataset.src;
        item.setAttribute("src", `${src}`);
        item.onload = function () {
          item.removeAttribute("data-src");
        };
      });
    }
  }
}

export default Lazyload;
