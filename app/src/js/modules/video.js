/* eslint-disable class-methods-use-this */
class Video {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-video") && (document.documentElement.clientWidth > 1000)) {
      const wrap = document.querySelector(".js-video");
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
  const wrapTopScroll = wrap.getBoundingClientRect().top < 0;
  const wrapBottomScroll = wrap.getBoundingClientRect().bottom < clientHeight;
  if (wrapBottomScroll) {
    wrap.classList.remove("back-video--fixed");
    wrap.classList.add("back-video--bottom");
  } else if (!wrapBottomScroll && wrapTopScroll) {
    wrap.classList.add("back-video--fixed");
    wrap.classList.remove("back-video--bottom");
  } else if (!wrapTopScroll) {
    wrap.classList.remove("back-video--fixed");
    wrap.classList.remove("back-video--bottom");
  }
}
export default Video;