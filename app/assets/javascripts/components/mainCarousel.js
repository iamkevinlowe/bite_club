$(function() {
  var $mainCarousel = $('.carousel-main');

  if ($mainCarousel.length < 1) return;

  $mainCarousel.owlCarousel({
    autoPlay: true,
    singleItem: true
  });
});