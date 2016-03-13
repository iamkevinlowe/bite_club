$(function() {
  var $mapElement = $('#map');
  var $yelpElements = $('.yelp');

  if ($mapElement.length < 1 || $yelpElements.length < 1) return;

  var yelpData = null;

  setup();

  function drawMap() {
    var map = new google.maps.Map($mapElement[0], {
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
    $yelpElements.each(function(index, element) {
      element.innerHTML = yelpStrings(element.dataset.yelp);
    });
  }

  function yelpStrings(data) {
    switch (data) {
      case 'rating-url':
        return "<img src='" + yelpData.rating_url + "' alt='Yelp Rating'>";
        break;
      case 'phone':
        return "<span>" + yelpData.phone + "</span>";
        break;
      case 'address':
        return "<span>" + yelpData.address + "</span>";
        break;
      default:
        console.log('Error: ' + data + ' is out of bounds.');
    }
  }

  function setup() {
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
        $mapElement.css('display', 'none');
      }
    });
  }
});