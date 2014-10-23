/***
    Index module
***/
angular.module('simple', [
  'ngFx',
  'ngSanitize',
  'ui.router',
  'simple.main',
  'simple.posts',
  'simple.modal'
])
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  // not needed, more of an organizational tool here for
  // routing
  $stateProvider
    .state('simple', {
      abstract: true,
      // url: '/app',
      templateUrl: 'app/app.html',
      controller: 'AppController as app'
  });
}])
.controller('AppController', ['Modal', function(Modal) {
  this.modal = Modal;
}]);
