$(function() {
  var $body = $('body');

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $body.removeClass('notouch');
  } else {
    $body.addClass('notouch');
  }
});