(function() {
  angular
    .module('app.resources')
    .factory('ListsService', ['$resource', ListsService]);

  function ListsService($resource) {
    return $resource('/list/:id.json');
  }
})();