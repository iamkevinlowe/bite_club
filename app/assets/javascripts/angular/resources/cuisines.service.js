(function() {
  angular
    .module('app.resources')
    .factory('CuisinesService', ['$resource', CuisinesService]);

  function CuisinesService($resource) {
    return $resource('/cuisine/:id.json');
  }
})();