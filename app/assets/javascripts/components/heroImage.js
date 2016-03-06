$(document).on('page:change', function() {
  var heroImgElement = document.getElementsByClassName('hero-image')[0];

  if (heroImgElement) {
    var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
    var transformProperty = null;

    function getSupportedPropertyName(properties) {
      for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != 'undefined') {
          return properties[i];
        }
      }
      return null;
    }

    window.addEventListener('scroll', function(event) {
      if (this.scrollY < heroImgElement.clientHeight) {
        if (transformProperty) {
          var transformValue = "translate3d(-50%, " + (1/3) * this.scrollY + "px, 0)";
          heroImgElement.style[transformProperty] = transformValue;
        }
      }
    })

    transformProperty = getSupportedPropertyName(transform);
  }
});