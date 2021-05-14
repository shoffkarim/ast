/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function scrollMagic() {
  if (
    document.documentElement.clientWidth > 767 && document.querySelector(".js-building")
  ) {
    let controller = new ScrollMagic.Controller({
      loglevel: 0,
    });
    let scenes = [];
    let buildAnim = new TimelineMax();
    buildAnim.to(".js-building .auto", 61, {
      backgroundPosition: "0px -17690px",
      ease: SteppedEase.config(61),
    });
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".js-building-control",
        duration: "120%",
        triggerHook: 0.5,
        offset: 200,
      })
        .setPin(".js-building")
        .addTo(controller)
    );
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".js-building-control",
        duration: "100%",
        triggerHook: 0.5,
        offset: 200,
      })
        .setTween(buildAnim)
        .addTo(controller)
    );
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".anim-circle--1",
        triggerHook: 0.5,
        offset: -300,
      })
        .setClassToggle(".anim-circle--1", "scale")
        .addTo(controller)
    );
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".anim-circle--2",
        triggerHook: 0.5,
        offset: -300,
      })
        .setClassToggle(".anim-circle--2", "scale")
        .addTo(controller)
    );
  }
  if (document.documentElement.clientWidth > 767 && document.querySelector(".js-about")) {
    let controller = new ScrollMagic.Controller({
      loglevel: 0,
    });
    let scenes = [];
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".about-circle",
        triggerHook: 0.5,
        offset: -300,
      })
        .setClassToggle(".about-circle", "scale")
        .addTo(controller)
    );
  }
  if (
    document.documentElement.clientWidth > 767 && document.querySelector(".js-about-map")
  ) {
    let controller = new ScrollMagic.Controller({
      loglevel: 0,
    });
    let scenes = [];
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".js-about-map",
        triggerHook: 0.5,
        offset: 0,
      })
        .setClassToggle(".js-about-map", "scale")
        .addTo(controller)
    );
  }
  if (
    document.documentElement.clientWidth > 767 && document.querySelector(".js-facts")
  ) {
    let controller = new ScrollMagic.Controller({
      loglevel: 0,
    });
    let scenes = [];
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".js-facts",
        triggerHook: 0.8,
        offset: 0,
      })
        .setClassToggle(".js-facts", "anim")
        .addTo(controller)
    );
  }
}

export default scrollMagic;
