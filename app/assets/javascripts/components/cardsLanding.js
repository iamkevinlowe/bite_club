$(document).on('page:change', function() {
  var cardsElement = document.getElementsByClassName('cards')[0];

  if (typeof cardsElement == 'undefined') return;

  function getListResources() {
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
      document.querySelector("[data-filter='all']").classList.add('active');
    });
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

  if (cardsElement.innerText == "") getListResources();
});