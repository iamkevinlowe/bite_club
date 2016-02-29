$(document).on('page:change', function() {
  var footer = document.getElementsByTagName('footer')[0];

  // Hides the footer when displaying the landing page image
  if (document.getElementsByClassName('welcome landing')[0]) {
    document.addEventListener('scroll', function(event) {
      footer.style.opacity = document.body.scrollTop < footer.clientHeight ? 0 : 1;
    });
  } else {
    footer.style.opacity = 1;
  }
});