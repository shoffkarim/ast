/* eslint-disable class-methods-use-this */
class ScrollAnimation {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-sticky") && (document.documentElement.clientWidth > 1000)) {
      const wrap = document.querySelector(".js-sticky");
      const clientHeight = document.documentElement.clientHeight;
      window.addEventListener('scroll', function () {
        classManager(wrap, clientHeight);
      });
      window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth > 1000) {
          classManager(wrap, clientHeight);
        }
      });
      window.addEventListener("load", function () {
        classManager(wrap, clientHeight);
      });
    }
  }
}

function classManager(wrap, clientHeight) {
  const wrapTopScroll = wrap.getBoundingClientRect().top < 50;
  const wrapBottomScroll = wrap.getBoundingClientRect().bottom < clientHeight - 100;
  if (wrapBottomScroll) {
    wrap.classList.remove("sticky");
    wrap.classList.add("bottom");
  } else if (!wrapBottomScroll && wrapTopScroll) {
    wrap.classList.add("sticky");
    wrap.classList.remove("bottom");
  } else if (!wrapTopScroll) {
    wrap.classList.remove("sticky");
    wrap.classList.remove("bottom");
  }
}
export default ScrollAnimation;