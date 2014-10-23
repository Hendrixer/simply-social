angular.module('simple.posts', [])

.factory('PostsService', [function() {
  var pic = 'http://img2.wikia.nocookie.net/__cb20120221170644/adventuretimewithfinnandjake/images/3/33/Lemongrab_Smile.jpg';

  var randomPost = [
    {
      type: 'text',
      message: 'How to Get Inspired the Right Way - Designmodo http://bit.ly/ei9jas Good stuff from @designmodo',
      comments: [],
      created: 4
    },
    {
      type: 'photo',
      message: 'My view this morning is simply beautiful... http://instagram.com/p/mVJKdfEHi/',
      image: 'http://upload.wikimedia.org/wikipedia/commons/d/da/SF_From_Marin_Highlands3.jpg',
      comments: [],
      created: 1
    },

    {
      type: 'text',
      message: 'such a good time last time, I can\'t believe i actually did that, wow!',
      comments: [],
      created: 3
    },

    {
      type: 'photo',
      message: 'party last night was nuts! shot from the VIP section',
      image: 'http://upload.wikimedia.org/wikipedia/commons/e/eb/The_Adicts_2011_SO36_03.jpg',
      comments: [],
      created: 4
    },

    {
      type: 'text',
      message: 'the next big there is here at my house #lovingMyNewTV #I\'m so lucky!!!',
      comments: [],
      created: 4
    },

    {
      type: 'text',
      message: 'the next big there is here at my house #lovingMyNewTV #I\'m so lucky!!!',
      comments: [],
      created: 4
    },

    {
      type: 'text',
      message: 'the next big there is here at my house #lovingMyNewTV #I\'m so lucky!!!',
      comments: [],
      created: 4
    },



  ];

  return [
    'Jessica Tuan',
    'Sam Soffers',
    'Meg Robichaud',
    'Karem Suer',
    'Liang Shi',
    'Vitor Leal',
    'Pallavi Gupta',

  ].map(function(name, i) {
    return { name:  name, img: pic, message: randomPost[i] };
  });
}]);
