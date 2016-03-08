$(document).on('page:change', function() {
  var $instagramCarouselElement = $('.carousel-instagram');

  if ($instagramCarouselElement.length < 1) return;

  var instagramMedia = [];
  var instagramGroupSize = 6;
  var instagramTotalSize = 18;
  var owl = {};

  function addClickHandlers() {
    var instagramElements = document.getElementsByClassName('instagram-image');

    for (var i = 0; i < instagramElements.length; i++) {
      instagramElements[i].addEventListener('click', function(event) {
        owl.stop();

        if (event.currentTarget.requestFullscreen) {
          event.currentTarget.requestFullscreen();
        } else if (event.currentTarget.msRequestFullscreen) {
          event.currentTarget.msRequestFullscreen();
        } else if (event.currentTarget.mozRequestFullScreen) {
          event.currentTarget.mozRequestFullScreen();
        } else if (event.currentTarget.webkitRequestFullscreen) {
          event.currentTarget.webkitRequestFullscreen();
        }
      });
    }
  }

  function getInstagramMedia(maxId) {
    if (typeof maxId == 'undefined') maxId = "";

    $.ajax({
      method: 'GET',
      url: '/api' + location.pathname + '/instagram/' + maxId,
      dataType: 'JSON'
    }).done(function(response) {
      instagramMedia = instagramMedia.concat(response.media);
      insertInstagramGroupElement(response.media);

      if (instagramMedia.length < instagramTotalSize && response.max_id) {
        getInstagramMedia(response.max_id);
      } else {
        // addClickHandlers();
      }
    });
  }

  function insertInstagramGroupElement(media) {
    var group = "<div class='group'>";

    media.forEach(function(item) {
      group += "<div class='carousel-image instagram-image' style='background-image: url(" + item + ");'></div>";
    });

    group += "</div>";

    owl.addItem(group);
  }

  $instagramCarouselElement.owlCarousel({
    autoPlay: true,
    singleItem: true
  });

  owl = $instagramCarouselElement.data('owlCarousel');
  
  getInstagramMedia();
});