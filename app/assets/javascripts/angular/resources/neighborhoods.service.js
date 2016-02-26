(function() {
  angular
    .module('app.resources')
    .factory('NeighborhoodsService', ['$resource', NeighborhoodsService]);

  function NeighborhoodsService($resource) {
    return $resource('/neighborhood/:id.json');
  }
})();