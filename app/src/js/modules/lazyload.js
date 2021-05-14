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
    window.addEventListener("resize", function () {
      videoloading();
    });
    window.addEventListener("load", function () {
      videoloading();
    });
  }
}

function videoloading() {
  if (document.querySelector(".lazyload-video") && document.documentElement.clientWidth > 550) {
    const video = document.querySelector(".lazyload-video");
    const src = video.dataset.src;
    video.setAttribute("src", `${src}`);
    video.parentElement.load();
  }
}

export default Lazyload;
