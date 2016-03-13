$(function() {
  var $instagramCarouselElement = $('.carousel-instagram');

  if ($instagramCarouselElement.length < 1) return;

  var $instagramCarouselFullscreenElement = $('.carousel-instagram-fullscreen');
  var instagramMedia = [];
  var instagramGroupSize = 6;
  var instagramTotalSize = 18;
  var owl_multi = {};
  var owl_full = {};

  setup();

  function exitFullscreenHandler() {
    $('.instagram-fullscreen').css({
      'opacity': 0,
      'pointer-events': 'none'
    });
  }

  function enterFullscreenHandler() {
    setCarouselIndex(this.dataset.index);
    $('.instagram-fullscreen').css({
      'opacity': 1,
      'pointer-events': 'all'
    });
  }

  function getInstagramMedia(maxId) {
    if (typeof maxId == 'undefined') maxId = "";

    $.ajax({
      method: 'GET',
      url: '/api' + location.pathname + '/instagram/' + maxId,
      dataType: 'JSON'
    }).done(function(response) {
      instagramMedia = instagramMedia.concat(response.media);
      owl_multi.addItem(makeInstagramGroupElement(response.media));
      response.media.forEach(function(item) {
        owl_full.addItem(makeInstagramElement(item, 'instagram-image-full'));
      });

      if (instagramMedia.length < instagramTotalSize && response.max_id) {
        getInstagramMedia(response.max_id);
      } else {
        $('.instagram-image').click(enterFullscreenHandler);
      }
    });
  }

  function makeInstagramElement(item, instagramClass) {
    if (typeof instagramClass == 'undefined') instagramClass = 'instagram-image';

    return "<div " +
      "class='carousel-image " + instagramClass + "' " +
      "style='background-image: url(" + item + ");' " +
      "data-index='" + instagramMedia.indexOf(item) + "'></div>";
  }

  function makeInstagramGroupElement(items) {
    var group = "<div class='group'>";

    items.forEach(function(item) {
      group += makeInstagramElement(item);
    });

    group += "</div>";

    return group;
  }

  function setCarouselIndex(index) {
    var xPosition = "-" + index * $instagramCarouselFullscreenElement.find('.owl-item').width() + "px";
    app.setTranslate3DTransform($instagramCarouselFullscreenElement.find('.owl-wrapper'), xPosition, 0, 0);
  }

  function setup() {
    $instagramCarouselElement.owlCarousel({
      autoPlay: true,
      singleItem: true
    });

    $instagramCarouselFullscreenElement.owlCarousel({
      pagination: false,
      singleItem: true
    });

    owl_multi = $instagramCarouselElement.data('owlCarousel');
    owl_full = $instagramCarouselFullscreenElement.data('owlCarousel');
    
    // getInstagramMedia();

    $('.exit-icon').click(exitFullscreenHandler);
  }
});