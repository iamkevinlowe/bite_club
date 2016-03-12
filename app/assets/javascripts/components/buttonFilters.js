$(function() {
  var $navFiltersElement = $('.nav-filters');

  if ($navFiltersElement.length < 1) return;

  var $buttonElements = $('.button-filter');
  var $cardsElement = $('.landing-cards');
  var $heroElement = $('.hero');
  var $logoElement = $('.logo');
  var filterElementPadding = parseInt($navFiltersElement.css('paddingTop'));
  var scrolling = false;

  setup();

  function buttonClickHandler(event) {
    event.preventDefault();

    setButtonActiveClass(this);
    displayListTypes(this.dataset.filter);
  }

  function displayListTypes(type) {
    var $allCards = $('[data-type]');

    if (type == 'all') {
      $allCards.css('display', 'block');
    } else {
      var $showCards = $("[data-type='" + type + "']");
      var $hideCards = $allCards.not($showCards);

      $showCards.css('display', 'block');
      $hideCards.css('display', 'none');
    }
  }

  function setButtonActiveClass(elem) {
    $buttonElements.removeClass('active');
    $(elem).addClass('active');
  }

  function setFixedPosition() {
    if (app.getScrollPosition() > $heroElement.height()) {
      $logoElement.css('opacity', 1);
      $navFiltersElement.css('padding', filterElementPadding - 15 + "px " + 0);
      $navFiltersElement.css('position', 'fixed');
      $cardsElement.css('marginTop', $navFiltersElement.css('height'));
    } else {
      $logoElement.css('opacity', 0);
      $navFiltersElement.css('padding', filterElementPadding + "px " + 0);
      $navFiltersElement.css('position', 'relative');
      $cardsElement.css('marginTop', 0);
    }
  }

  function setup() {
    $buttonElements.click(buttonClickHandler);
    $(window).scroll(setFixedPosition);
  }
});