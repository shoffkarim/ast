/* eslint-disable class-methods-use-this */
class Parallax {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-parallax")) {
      const scene2 = document.querySelector(".js-parallax");
      // eslint-disable-next-line no-unused-vars
      let parallaxInstance2 = new Parallax(scene2, {
        relativeInput: true,
        selector: ".js-parallax-item",
        limitX: true,
        limitY: true,
        invertY: false,
        invertX: false,
      });
    }
  }
}

export default Parallax;
