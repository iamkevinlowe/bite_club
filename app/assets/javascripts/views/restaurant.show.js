$(document).on('page:change', function() {
  if (!document.getElementsByClassName('restaurant show')[0]) return;

  var mainCarousel = $('.carousel-main');
  var instagramCarousel = $('.carousel-instagram');

  mainCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    items: 1
  });

  instagramCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    items: 1
  });

  var instagramElements = document.getElementsByClassName('instagram-image');

  for (var i = 0; i < instagramElements.length; i++) {
    instagramElements[i].addEventListener('click', function(event) {
      // instagramCarousel.trigger('stop.owl.autoplay');

      // if (event.currentTarget.requestFullscreen) {
      //   event.currentTarget.requestFullscreen();
      // } else if (event.currentTarget.msRequestFullscreen) {
      //   event.currentTarget.msRequestFullscreen();
      // } else if (event.currentTarget.mozRequestFullScreen) {
      //   event.currentTarget.mozRequestFullScreen();
      // } else if (event.currentTarget.webkitRequestFullscreen) {
      //   event.currentTarget.webkitRequestFullscreen();
      // }
    });
  }

  $.ajax({
    method: 'GET',
    url: location.pathname,
    dataType: 'JSON'
  }).done(function(response) {
    var mapElement = document.getElementById('map');
    if (response) {
      var map = new google.maps.Map(mapElement, {
        center: response.coordinate,
        zoom: 14
      });

      var marker = new google.maps.Marker({
        position: response.coordinate,
        map: map,
        title: response.name
      });
    } else {
      mapElement.style.display = 'none';
    }
  });
});