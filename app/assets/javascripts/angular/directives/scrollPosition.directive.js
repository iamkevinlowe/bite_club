(function() {
  angular
    .module('app.directives')
    .directive('scrollPosition', ['$window', scrollPosition]);

  function scrollPosition($window) {
    return {
      link: function(scope, element, attrs) {
        var windowEl = angular.element($window);
        var handler = function() {
          if (location.pathname == '/' && windowEl.scrollTop() < 50) {
            element.css('opacity', 0);
          } else {
            element.css('opacity', 1);
          }
        };
        windowEl.on('scroll', handler);
        handler();
      }
    }
  }
})();