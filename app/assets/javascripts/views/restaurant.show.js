$(document).on('page:change', function() {
  if (!document.getElementsByClassName('restaurant show')[0]) return;

  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    items: 1
  });
});