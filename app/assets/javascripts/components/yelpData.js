$(document).on('ready', function() {
  var mapElement = document.querySelector('#map');
  var yelpElements = document.querySelectorAll('.yelp');

  if (!mapElement || yelpElements.length < 1) return;

  var yelpData = null;

  function drawMap() {
    var map = new google.maps.Map(mapElement, {
      center: yelpData.coordinate,
      zoom: 14
    });

    var marker = new google.maps.Marker({
      position: yelpData.coordinate,
      map: map,
      title: yelpData.name
    });
  }

  function fillYelp() {
    for (var i = 0; i < yelpElements.length; i++) {
      yelpElement = yelpElements[i];
      yelpElement.innerHTML = yelpStrings(yelpElement.dataset.yelp);
    }
  }

  function yelpStrings(data) {
    switch (data) {
      case 'rating-url':
        return "<img src='" + yelpData.rating_url + "' alt='Yelp Rating'>";
        break;
      case 'phone-mobile':
        return "<a href='" + yelpData.phone_mobile + "'>" + yelpData.phone + "</a>";
        break;
      case 'phone':
        return yelpData.phone;
        break;
      case 'address':
        return yelpData.address;
        break;
      default:
        console.log('Error: ' + data + ' is out of bounds.');
    }
  }

  $.ajax({
    method: 'GET',
    url: '/api' + location.pathname + '/yelp',
    dataType: 'JSON'
  }).done(function(response) {
    if (response) {
      yelpData = response;
      drawMap();
      fillYelp();
    } else {
      mapElement.style.display = 'none';
    }
  });
});