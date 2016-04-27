angular.module('PortfolioApp', ['ui.router', 'ui.bootstrap'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'initial.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'projects.html'
      })


    

    $locationProvider.html5Mode(true);
  }]);

  // , 'ui.bootstrap'