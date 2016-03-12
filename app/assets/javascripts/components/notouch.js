$(document).on('ready', function() {
  var body = document.getElementsByTagName('body')[0];

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    body.classList.remove('notouch');
  } else {
    body.classList.add('notouch');
  }
});