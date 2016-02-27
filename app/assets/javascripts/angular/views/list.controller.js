// TODO: May not need Angular.  Currently not being injected to test this.
(function() {
  angular
    .module('app.lists')
    .controller('ListController', [
      '$q',
      '$scope',
      'ListsService',
      ListController
    ]);

  function ListController(
    $q,
    $scope,
    ListsService
  ) {

    init()

    $scope.list = null;

    // Private

    function init() {
      getList(location.pathname.split('/').slice(-1)[0])
        .then(function(response) {
          $scope.list = response;
        }
      );
    }

    function getList(id) {
      var d = $q.defer();
      ListsService.get(
        {id: id},
        function(response) {
          d.resolve(response);
        }
      );
      return d.promise;
    }
  }
})();