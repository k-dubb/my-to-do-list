(function() {
  var app = angular.module('myTodo', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // home page
      .state('home', {
        url: '/',
        templateUrl: '/templates/_homeView.html'
      })
      // choose background image
      .state('photo', {
        url: '/photo',
        templateUrl: '/templates/_photoView.html'
      })
 
  });

})();