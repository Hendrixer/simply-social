angular.module('simple.main.home.feedFilter', [])
.filter('feedFilter', [function() {
  return function(posts, type) {
    if(!type || type === '') {
      return posts;
    }
    return posts.filter(function(post) {

      return  post.message.type === type;
    });
  };
}]);
