/* eslint-disable class-methods-use-this */
class Building {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-building") && (document.documentElement.clientWidth > 1000)) {
      const wrap = document.querySelector(".js-building");
      const clientHeight = document.documentElement.clientHeight;

      window.addEventListener('scroll', () => classManager(wrap, clientHeight));

      window.addEventListener("load", () => classManager(wrap, clientHeight));

      window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth > 1000) {
          classManager(wrap, clientHeight);
        }
      });
    }
  }
}

function classManager(wrap, clientHeight) {
  const wrapTopScroll = wrap.getBoundingClientRect().top < (clientHeight / 2 - 175);
  console.log(wrapTopScroll);
  const wrapBottomScroll = wrap.getBoundingClientRect().bottom < clientHeight;
  if (wrapBottomScroll) {
    wrap.classList.remove("about-building--bottom");
    wrap.classList.add("about-building--fixed");
  }
  // else if (!wrapBottomScroll && wrapTopScroll) {
  //   wrap.classList.add("about-building--fixed");
  //   wrap.classList.remove("about-building--bottom");
  // } else if (!wrapTopScroll) {
  //   wrap.classList.remove("about-building--fixed");
  //   wrap.classList.remove("about-building--bottom");
  // }
}
export default Building;