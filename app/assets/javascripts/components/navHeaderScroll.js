$(function() {
  var $navHeaderElement = $('.nav-header');

  if ($navHeaderElement.length < 1) return;

  var currentYPosition = 0;
  var previousYPosition = 0;

  setup();

  function setup() {
    $(window).scroll(windowScrollHandler);
    $('.wrapper').css('paddingTop', $navHeaderElement.css('height'));
  }

  function windowScrollHandler() {
    previousYPosition = currentYPosition;
    currentYPosition = app.getScrollPosition();

    if (previousYPosition < currentYPosition) {
      $navHeaderElement.css('top', "-" + $navHeaderElement.css('height'));
    } else {
      $navHeaderElement.css('top', 0);
    }
  }
});