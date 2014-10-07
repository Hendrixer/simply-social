angular.module('simple.main.home', ['simple.main.home.postDirective'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('simple.main.home', {
      url: '/',
      templateUrl: 'app/main/home/home.html',
      controller: 'HomeCtrl as home'
  });
}])
.controller('HomeCtrl', ['$scope', 'PostsService', function($scope, Posts) {
  this.name = 'name';
  this.filter = '';
  this.posts = Posts;
}]);
