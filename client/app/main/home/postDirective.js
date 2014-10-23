angular.module('simple.main.home.postDirective', [])
.directive('ssPost', [function() {
  return {
    restrict: 'EA',
    templateUrl: 'app/main/home/post-directive.html',
    replace: true,
    scope: {
      post: '=',
      layout: '@'
    },
    link: function(scope) {
      // DOM things here
    }
  };
}]);
