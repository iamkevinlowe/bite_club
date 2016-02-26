(function() {
  // Setting child modules
  angular.module('app.landing', []);

  angular.module('app.resources', [
    'ngResource'
  ]);

  angular.module('app.directives', []);

  // Setting main module
  angular.module('app', [
    'app.landing',
    'app.resources',
    'app.directives'
  ]);
})();