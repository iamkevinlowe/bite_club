$(document).on('page:change', function() {
  if (!document.getElementsByClassName('welcome landing')[0]) return;

  var buttonElements = document.getElementsByClassName('button-filter');
  var cardsElement = document.getElementsByClassName('cards')[0];

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

  function makeCardElement(list) {
    var card = "<div class='third half-mobile' data-type='" + list.type + "''>" +
      "<a href='" + list.type + "/" + list.id + "'>" +
        "<div class='card' style='background-image: url(" + list.picture_url + ")'></div>" +
        "<div class='content'>" +
          "<span>" + list.name + "</span>" +
        "</div>" +
      "</a>" +
    "</div>";

    cardsElement.innerHTML += card;
  }

  function setButtonActiveClass(elem) {
    for (var i = 0; i < buttonElements.length; i++) {
      buttonElements[i].classList.remove('active');
    }
    elem.classList.add('active');
  }

  $.when(
    $.ajax({
      method: 'GET',
      url: '/api/list',
      dataType: 'JSON'
    }).done(function(response) {
      response.forEach(function(theme) {
        makeCardElement(theme);
      });
    }),
    $.ajax({
      method: 'GET',
      url: '/api/cuisine',
      dataType: 'JSON'
    }).done(function(response) {
      response.forEach(function(cuisine) {
        makeCardElement(cuisine);
      });
    }),
    $.ajax({
      method: 'GET',
      url: '/api/neighborhood',
      datatype: 'JSON'
    }).done(function(response) {
      response.forEach(function(neighborhood) {
        makeCardElement(neighborhood);
      });
    })
  ).then(function() {
    setButtonActiveClass(buttonElements[0]);
  });

  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener('click', function(event) {
      event.preventDefault();
      
      setButtonActiveClass(this);
      displayListTypes(this.dataset.filter);
    });
  }
});