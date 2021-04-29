/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// STYLES=============================================================================
import '../sass/style.sass';

if (document.documentElement.clientWidth > 767) {
  let controller = new ScrollMagic.Controller({
    loglevel: 0,
  });
  let scenes = [];
  let buildAnim = new TimelineMax();
  buildAnim.to(".js-building .auto", 61, { backgroundPosition: "0px -17690px", ease: SteppedEase.config(61) });
  scenes.push(new ScrollMagic.Scene({
    triggerElement: ".js-building-control", duration: '100%', triggerHook: 0.5, offset: 200
  })
    .setPin(".js-building")
    .addTo(controller));
    scenes.push(new ScrollMagic.Scene({
      triggerElement: ".js-building-control", duration: '100%', triggerHook: 0.5, offset: 200
    })
      .setTween(buildAnim)
      .addTo(controller));
}