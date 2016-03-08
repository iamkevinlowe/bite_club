$(document).on('page:change', function() {
  var buttonElements = document.getElementsByClassName('button-filter');

  if (buttonElements.length < 1) return;

  function displayListTypes(type) {
    var allCards = document.querySelectorAll("[data-type]");

    if (type == 'all') {
      for (var i = 0; i < allCards.length; i++) {
        allCards[i].style.display = 'block';
      }
    } else {
      var showCards = document.querySelectorAll("[data-type='" + type + "']");
      var hideCards = [];

      for (var i = 0; i < allCards.length; i++) {
        if (Array.prototype.indexOf.call(showCards, allCards[i]) < 0) {
          hideCards.push(allCards[i]);
        }
      }

      for (var i = 0; i < showCards.length; i++) {
        showCards[i].style.display = 'block';
      }

      for (var i = 0; i < hideCards.length; i++) {
        hideCards[i].style.display = 'none';
      }
    }
  }

  function setButtonActiveClass(elem) {
    for (var i = 0; i < buttonElements.length; i++) {
      buttonElements[i].classList.remove('active');
    }
    elem.classList.add('active');
  }

  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener('click', function(event) {
      event.preventDefault();
      
      setButtonActiveClass(this);
      displayListTypes(this.dataset.filter);
    });
  }
});