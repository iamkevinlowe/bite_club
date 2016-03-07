$(document).on('page:change', function() {
  var $mainCarousel = $('.carousel-main');

  if ($mainCarousel) {
    $mainCarousel.owlCarousel({
      loop: true,
      autoplay: true,
      center: true,
      items: 1
    });
  }
});