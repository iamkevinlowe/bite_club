(function(app) {
  $(function() {
    app.getScrollPosition = getScrollPosition;
    app.requestAnimationFrame = window.requestAnimationFrame.bind(window) ||
                                window.mozRequestAnimationFrame.bind(window) ||
                                window.webkitRequestAnimationFrame.bind(window) ||
                                window.msRequestAnimationFrame.bind(window);
    app.requestFullscreen = requestFullscreen;
    app.setTranslate3DTransform = setTranslate3DTransform;

    var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
    var transformProperty = getSupportedPropertyName(transform);

    function getScrollPosition() {
      if (document.documentElement.scrollTop == 0) {
        return document.body.scrollTop;
      } else {
        return document.documentElement.scrollTop;
      }
    }

    function getSupportedPropertyName(properties) {
      for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != 'undefined') {
          return properties[i];
        }
      }
      return null;
    }

    function requestFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFulLScreen) {
        element.mozRequestFulLScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }

    function setTranslate3DTransform(element, xPosition, yPosition, zPosition) {
      var value = "translate3d(" + xPosition + ", " + yPosition + ", " + zPosition + ")";
      element.css(transformProperty, value);
    }
  });
})(window.app = window.app || {});