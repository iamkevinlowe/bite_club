$(document).on('page:change', function() {
  if (!document.getElementsByClassName('restaurant show')[0]) return;

  $('.carousel-main').owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    items: 1
  });

  $('.carousel-instagram').owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    items: 1
  });

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