angular.module('simple.main.home.postDirective', [])
.directive('ssPost', [function() {
  return {
    restrict: 'EA',
    templateUrl: 'app/main/home/post-directive.html',
    replace: true,
    scope: {
      post: '='
    },
    link: function(scope, element) {
      var is = /(?!#@\()(http|https)\:\/\/[a-zA-Z0-9].+?(?=\))/.test(element[0].innerHTML);
      console.log(is);
    }
  };
}]);
