angular.module('simple.posts', [])

.factory('PostsService', [function() {

  var randomPost = [
    {
      type: 'text',
      message: 'How to Get Inspired the Right Way - Designmodo #@(http://bit.ly/ei9jas) Good stuff from @designmodo',
      comments: [],
      created: '3m'
    },
    {
      type: 'photo',
      message: 'My view this morning is simply beautiful... #@(http://instagram.com/p/mVJKdfEHi/)',
      image: 'water-mountain',
      comments: [],
      created: '25m'
    }
  ];

  var getPost = function() {
    var randomNumber = Math.floor(Math.random(0, randomPost.length - 1));
    return randomPost[randomNumber];
  };

  return [
    'Jessica Tuan',
    'Sam Soffers',
    'Meg Robichaud',
    'Karem Suer',
    'Liang Shi',
    'Vitor Leal',
    'Pallavi Gupta',
    'Jenny Shen',
    'Jonathan Moreira',
    'Jon Brennan',
    'Michael Wong',
    'Ed Wellbrook',
    'Ignaciao Girl',
    'Buzz Usborne',
    'Scott Riley'
  ].reduce(function(Posts, name) {
    Posts.push({ name:  name, img: 'images/users/' + name + '.jpg', message:getPost() });
    return Posts;
  }, []);
}]);
