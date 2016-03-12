$(function() {
  var $heroImgElement = $('.hero-image');

  if ($heroImgElement.length < 1) return;

  var scrolling = false;

  setup();

  function animationLoop() {
    if (scrolling) {
      app.setTranslate3DTransform($heroImgElement, '-50%', app.getScrollPosition() / 2 + "px", 0);
      scrolling = false;
    }

    app.requestAnimationFrame(animationLoop);
  }

  function setScrolling() {
    scrolling = true;
  }

  function setup() {
    $(window).scroll(setScrolling);
    animationLoop();
  }
});