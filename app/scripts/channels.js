angular.module('myApp.channels', ['myApp.pusher'])

  .factory('featuredUserChannel', function(pusherChannel) {
    return pusherChannel('featured_user');
  })

  .factory('userChannel', function(pusherChannel) {
    return pusherChannel('user');
  })

  .factory('commentsChannel', function(pusherChannel) {
    return pusherChannel('comment');
  });
