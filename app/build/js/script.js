(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/',b(b.s='./app/src/js/script.js')})({"./app/src/js/script.js":/*!******************************!*\
  !*** ./app/src/js/script.js ***!
  \******************************//*! no exports provided */function(module,__webpack_exports__,__webpack_require__){'use strict';eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.sass */ "./app/src/sass/style.sass");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable no-undef */\n\n/* eslint-disable no-unused-vars */\n// STYLES=============================================================================\n\n\nif (document.documentElement.clientWidth > 766) {\n  var controller = new ScrollMagic.Controller({\n    loglevel: 0\n  });\n  var scenes = [];\n  var buildAnim = new TimelineMax();\n  buildAnim.to(".js-building .auto", 61, {\n    backgroundPosition: "0px -17690px",\n    ease: SteppedEase.config(61)\n  });\n  scenes.push(new ScrollMagic.Scene({\n    triggerElement: ".js-building-control",\n    duration: \'100%\',\n    triggerHook: 0.5,\n    offset: 200\n  }).setPin(".js-building").addTo(controller));\n  scenes.push(new ScrollMagic.Scene({\n    triggerElement: ".js-building-control",\n    duration: \'100%\',\n    triggerHook: 0.5,\n    offset: 200\n  }).setTween(buildAnim).addTo(controller));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3JjL2pzL3NjcmlwdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zcmMvanMvc2NyaXB0LmpzP2JlNjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLy8gU1RZTEVTPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0ICcuLi9zYXNzL3N0eWxlLnNhc3MnO1xyXG5cclxuaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+IDc2Nikge1xyXG4gIGxldCBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoe1xyXG4gICAgbG9nbGV2ZWw6IDAsXHJcbiAgfSk7XHJcbiAgbGV0IHNjZW5lcyA9IFtdO1xyXG4gIGxldCBidWlsZEFuaW0gPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuICBidWlsZEFuaW0udG8oXCIuanMtYnVpbGRpbmcgLmF1dG9cIiwgNjEsIHsgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjBweCAtMTc2OTBweFwiLCBlYXNlOiBTdGVwcGVkRWFzZS5jb25maWcoNjEpIH0pO1xyXG4gIHNjZW5lcy5wdXNoKG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcbiAgICB0cmlnZ2VyRWxlbWVudDogXCIuanMtYnVpbGRpbmctY29udHJvbFwiLCBkdXJhdGlvbjogJzEwMCUnLCB0cmlnZ2VySG9vazogMC41LCBvZmZzZXQ6IDIwMFxyXG4gIH0pXHJcbiAgICAuc2V0UGluKFwiLmpzLWJ1aWxkaW5nXCIpXHJcbiAgICAuYWRkVG8oY29udHJvbGxlcikpO1xyXG4gICAgc2NlbmVzLnB1c2gobmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuICAgICAgdHJpZ2dlckVsZW1lbnQ6IFwiLmpzLWJ1aWxkaW5nLWNvbnRyb2xcIiwgZHVyYXRpb246ICcxMDAlJywgdHJpZ2dlckhvb2s6IDAuNSwgb2Zmc2V0OiAyMDBcclxuICAgIH0pXHJcbiAgICAgIC5zZXRUd2VlbihidWlsZEFuaW0pXHJcbiAgICAgIC5hZGRUbyhjb250cm9sbGVyKSk7XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/src/js/script.js\n')},"./app/src/sass/style.sass":/*!*********************************!*\
  !*** ./app/src/sass/style.sass ***!
  \*********************************//*! no static exports found */function(module,exports,__webpack_require__){eval('// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3JjL3Nhc3Mvc3R5bGUuc2Fzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zcmMvc2Fzcy9zdHlsZS5zYXNzPzY3Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/src/sass/style.sass\n')}});