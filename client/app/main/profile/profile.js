angular.module('simple.main.profile', [
  'simple.main.profile.settings'
])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('simple.main.profile', {
      abstract: true,
      template: '<ui-view></ui-view>'
  });
}]);
