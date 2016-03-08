$(document).on('page:change', function() {
  var $mainCarousel = $('.carousel-main');

  if ($mainCarousel) {
    $mainCarousel.owlCarousel({
      autoPlay: true,
      singleItem: true
    });
  }
});