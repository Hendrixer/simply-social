angular.module('simple.main.home', [
  'simple.main.home.postDirective',
  'simple.main.home.feedFilter'
])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('simple.main.home', {
      url: '/',
      templateUrl: 'app/main/home/home.html',
      controller: 'HomeCtrl as home'
  });
}])
.controller('HomeCtrl', ['$scope', '$timeout', 'PostsService', function($scope, $timeout, Posts) {
  this.name = 'name';
  this.filter = '';
  this.posts = Posts;
  this.feedClass = 'container';
  this.layout = 1;
  this.grid = function(yes) {
    if (yes) {
      this.layout = '';
      this.feedClass = 'container';
      return;
    }
    this.layout = 'grid';
    $timeout(function() {
      this.feedClass = '';
    }.bind(this), 100);
  };
}]);
