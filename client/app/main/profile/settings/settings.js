angular.module('simple.main.profile.settings', [])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('simple.main.profile.settings', {
      url: '/settings',
      templateUrl: 'app/main/profile/settings/settings.html',
      controller: 'SettingsCtrl as settings'
    });
}])
.controller('SettingsCtrl', ['$scope', function($scope) {
  $scope.name = '';
}]);
