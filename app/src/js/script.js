/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import "../sass/style.sass";

import Lazyload from "./modules/lazyload";
import Cookie from "./modules/cookie";
import Dropdown from "./modules/dropdown";
import InputMask from "./modules/imask-init";
import Popup from "./modules/popup";
import ScrollAnimation from "./modules/scrollAnimation";
import Seo from "./modules/seo";
import Validation from "./modules/validation";
import FlyingCorn from "./modules/flyingCorn";
import scrollMagic from "./modules/scrollMagic";

const lazyload = new Lazyload();
const seo = new Seo();
const popup = new Popup();
const validation = new Validation();
const imask = new InputMask();
const cookie = new Cookie();
const dropdown = new Dropdown();
const scroll = new ScrollAnimation();
const flyingCorn = new FlyingCorn();

scrollMagic();

if (document.querySelector(".js-parallax")) {
  const parallaxsence = document.querySelectorAll(".js-parallax");
  // eslint-disable-next-line no-unused-vars
  parallaxsence.forEach(function (scene) {
    let parallaxInstance2 = new Parallax(scene, {
      selector: ".js-parallax-item",
      hoverOnly: true,
    });
  });
}
