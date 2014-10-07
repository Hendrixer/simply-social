/***
    Index module
***/
angular.module('simple', [
  'ngFx',
  'ui.router',
  'simple.main',
  'simple.posts'
])
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  // not needed, more of an organizational tool here for
  // routing
  $stateProvider
    .state('simple', {
      abstract: true,
      // url: '/app',
      templateUrl: 'app/app.html'
  });
}]);
