(function() {
  // Setting child modules
  angular.module('app.landing', []);

  angular.module('app.resources', [
    'ngResource'
  ]);

  // Setting main module
  angular.module('app', [
    'app.landing',
    'app.resources'
  ]);
})();