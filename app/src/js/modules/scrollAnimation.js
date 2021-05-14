/* eslint-disable class-methods-use-this */
class ScrollAnimation {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-sticky")) {
      const wrap = document.querySelector(".js-container-sticky");
      const clientHeight = document.documentElement.clientHeight;
      window.addEventListener('scroll', function () {
        if (document.documentElement.clientWidth > 1200) {
          classManager(wrap, clientHeight);
        }
      });
      window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth > 1200) {
          classManager(wrap, clientHeight);
          console.log(1);
        }
      });
      window.addEventListener("load", function () {
        if (document.documentElement.clientWidth > 1200) {
          classManager(wrap, clientHeight);
        }
      });
    }
  }
}

function classManager(wrap, clientHeight) {
  const wrapTopScroll = wrap.getBoundingClientRect().top < 50;
  const container = document.querySelector(".js-sticky");
  const map = container.querySelector(".js-sticky-map");
  if (wrap.getBoundingClientRect().bottom < map.getBoundingClientRect().bottom) {
    container.classList.remove("sticky");
    container.classList.add("bottom");
  // eslint-disable-next-line max-len
  } else if ((wrapTopScroll && wrap.getBoundingClientRect().bottom > map.getBoundingClientRect().bottom) || (wrapTopScroll && wrap.getBoundingClientRect().bottom > clientHeight)) {
    container.classList.add("sticky");
    container.classList.remove("bottom");
  } else if (!wrapTopScroll) {
    container.classList.remove("sticky");
    container.classList.remove("bottom");
  }
}

export default ScrollAnimation;