$(document).on('page:change', function() {
  if (!document.getElementsByClassName('welcome landing')[0]) return;

  var themes = [];
  var cuisines = [];
  var neighborhoods = [];

  function displayLists(lists) {
    var cardsElement = document.getElementsByClassName('cards')[0];
    cardsElement.innerHTML = "";

    lists.forEach(function(list) {
      cardsElement.innerHTML += makeCardElement(list);
    });
  }

  function filterLists(filter) {
    switch (filter) {
      case 'all':
        displayLists(themes.concat(cuisines).concat(neighborhoods));
        break;
      case 'theme':
        displayLists(themes);
        break;
      case 'cuisine':
        displayLists(cuisines);
        break;
      case 'neighborhood':
        displayLists(neighborhoods);
        break;
      default:
        console.log('Error: ' + filter + ' is out of bounds');
    }
  }

  function makeCardElement(list) {
    var card = "<div class='col-xs-6 col-md-4'>" +
      "<a href='" + list.type + "/" + list.id + "'>" +
        "<div class='card' style='background-image: url(" + list.picture_url + ")'>" +
          "<div class='content'>" +
            "<span>" + list.name + "</span>" +
          "</div>" +
        "</div>" +
      "</a>" +
    "</div>";

    return card;
  }

  var buttons = document.getElementsByClassName('button-filter');

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
      themes = response;
    }),
    $.ajax({
      method: 'GET',
      url: '/cuisine',
      dataType: 'JSON'
    }).done(function(response) {
      cuisines = response;
    }),
    $.ajax({
      method: 'GET',
      url: '/neighborhood',
      datatype: 'JSON'
    }).done(function(response) {
      neighborhoods = response;
    })
  ).then(function() {
    filterLists('all');
  });

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      event.preventDefault();
      
      setButtonActiveClass(this);
      filterLists(this.dataset.filter);
    });
  }

});