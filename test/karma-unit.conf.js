module.exports = function(config) {
  config.set({
    files : [
      'bower_components/jquery/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/pusher/dist/pusher.js',
      'app/scripts/config.js',
      'app/scripts/pusher.js',
      'app/scripts/channels.js',
      'app/scripts/utils.js',
      'app/scripts/homePages.js',
      'app/scripts/profilePages.js',
      'app/scripts/commentPages.js',
      'app/scripts/app.js',
      'test/unit/**/*.js'
    ],
    basePath: '../',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true,
    colors: true
  });
};
