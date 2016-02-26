(function() {
  angular
    .module('app.landing')
    .controller('LandingController', [
      '$q',
      '$scope',
      'CuisinesService',
      'ListsService',
      'NeighborhoodsService',
      LandingController
    ]);

  function LandingController(
    $q,
    $scope,
    CuisinesService,
    ListsService,
    NeighborhoodsService
  ) {

    init();

    $scope.activeFilter = null;
    $scope.onFilterClick = onFilterClick;
    // TODO: Possible naming issue - list(resource) and theme(in view)
    $scope.lists = [];

    function onFilterClick(event) {
      var element = event.currentTarget;

      displayLists(element.dataset.filter);
    }

    // Private

    var cuisines = [];
    var lists = [];
    var neighborhoods = [];

    function init() {
      $q.all([
        getAllCuisinese(),
        getAllLists(),
        getAllNeighborhoods()
      ]).then(function(data) {
        cuisines = data[0];
        lists = data[1];
        neighborhoods = data[2];

        displayLists('all');
      });
    }

    function displayLists(type) {
      $scope.activeFilter = type;

      switch(type) {
        case 'all':
          $scope.lists = cuisines.concat(lists).concat(neighborhoods);
          break;
        case 'theme':
          // TODO: Related to naming issue - consider renaming resource.
          $scope.lists = lists;
          break;
        case 'cuisine':
          $scope.lists = cuisines;
          break;
        case 'neighborhood':
          $scope.lists = neighborhoods;
          break;
        default:
          console.log('Error: ' + type + ' is out of bounds.');
      }
    }

    function getAllCuisinese() {
      var d = $q.defer();
      CuisinesService.query({}, function(response) {
        d.resolve(response);
      });
      return d.promise;
    }

    function getAllLists() {
      var d = $q.defer();
      ListsService.query({}, function(response) {
        d.resolve(response);
      });
      return d.promise;
    }

    function getAllNeighborhoods() {
      var d = $q.defer();
      NeighborhoodsService.query({}, function(response) {
        d.resolve(response);
      });
      return d.promise;
    }
  }
})();