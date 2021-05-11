/* eslint-disable class-methods-use-this */
class FlyingCorn {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".fly-corn")) {
      const elems = document.querySelectorAll(".fly-elem");
      const container = document.querySelector(".fly-corn");
      const height = container.clientHeight;
      elems.forEach(function (item) {
        item.style.bottom = `${getRandomArbitrary(0, height)}px`;
        item.style.animationDuration = `${getRandomArbitrary(2, 5)}s`;
      });
    }
  }
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
export default FlyingCorn;
