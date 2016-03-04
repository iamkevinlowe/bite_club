$(document).on('page:change', function() {
  if (!document.getElementsByClassName('welcome landing')[0]) return;

  var buttons = document.getElementsByClassName('button-filter');

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
    var cardsElement = document.getElementsByClassName('cards')[0];
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
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    elem.classList.add('active');
  }

  $.when(
    $.ajax({
      method: 'GET',
      url: '/list',
      dataType: 'JSON'
    }).done(function(response) {
      response.forEach(function(theme) {
        makeCardElement(theme);
      });
    }),
    $.ajax({
      method: 'GET',
      url: '/cuisine',
      dataType: 'JSON'
    }).done(function(response) {
      response.forEach(function(cuisine) {
        makeCardElement(cuisine);
      });
    }),
    $.ajax({
      method: 'GET',
      url: '/neighborhood',
      datatype: 'JSON'
    }).done(function(response) {
      response.forEach(function(neighborhood) {
        makeCardElement(neighborhood);
      });
    })
  ).then(function() {
    setButtonActiveClass(buttons[0]);
  });

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      event.preventDefault();
      
      setButtonActiveClass(this);
      displayListTypes(this.dataset.filter);
    });
  }

});