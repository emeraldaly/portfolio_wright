angular.module('PortfolioApp', ['ui.router', 'ui.bootstrap'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/initial.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'views/resume.html'
      })


    

    $locationProvider.html5Mode(true);
  }]);

  // , 'ui.bootstrap'