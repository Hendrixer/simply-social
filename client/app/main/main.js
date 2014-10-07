angular.module('simple.main', [
  'simple.main.home',
  'simple.main.profile'
])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('simple.main', {
      abstract: true,
      // url: '/main',
      template: '<ui-view></ui-view>'
    });
}]);
