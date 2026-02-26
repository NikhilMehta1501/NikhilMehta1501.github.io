(function () {
  "use strict";

  var STAGGER_MS = 120;
  var REVEAL_START_MS = 1000;

  function staggerReveal() {
    var reveals = document.querySelectorAll(".reveal[data-reveal]");
    reveals.forEach(function (el, index) {
      setTimeout(function () {
        el.classList.add("visible");
      }, REVEAL_START_MS + index * STAGGER_MS);
    });
  }

  function init() {
    staggerReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
