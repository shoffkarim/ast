/* eslint-disable class-methods-use-this */
class Building {
  constructor() {
    this.init();
  }

  init() {
    if (
      document.querySelector(".js-building") && document.documentElement.clientWidth > 1000
    ) {
      const wrap = document.querySelector(".js-building");
      const clientHeight = document.documentElement.clientHeight;

      window.addEventListener("scroll", () => classManager(wrap, clientHeight));

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
  // console.log(window.scrollY);
  const control = document.querySelector(".js-building-control");
  const controlTopScroll = control.getBoundingClientRect().top < clientHeight / 2 - 175;
  const container = document.querySelector(".about");
  const containerBottomScroll = container.getBoundingClientRect().bottom < clientHeight - 187;
  const containerTopScroll = container.getBoundingClientRect().bottom < clientHeight;
  // console.log("контейнер низ", containerBottomScroll);
  // console.log("контейнер верх", containerTopScroll);
  // console.log("котрол", controlTopScroll);
  if (controlTopScroll && !containerTopScroll) {
    wrap.classList.remove("about-building--bottom");
    wrap.classList.add("about-building--fixed");
    // if (wrap.classList.contains("flag")) {
    //   wrap.classList.remove("animation");
    //   wrap.classList.add("animation-reverse");
    // } else {
    //   wrap.classList.remove("animation-reverse");
    //   wrap.classList.add("animation");
    // }
  } else if (containerTopScroll && controlTopScroll) {
    wrap.classList.add("about-building--bottom");
    // wrap.classList.add("flag");
    // wrap.classList.remove("animation");
    // wrap.classList.remove("animation-reverse");
    wrap.classList.remove("about-building--fixed");
  } else if (!containerBottomScroll && !controlTopScroll && !containerTopScroll) {
    wrap.classList.remove("about-building--bottom");
    // wrap.classList.remove("flag");
    // wrap.classList.remove("animation");
    // wrap.classList.remove("animation-reverse");
    wrap.classList.remove("about-building--fixed");
  }
}
export default Building;
