angular.module("PortfolioApp", ["ui.router", "ui.bootstrap"])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/initial');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'initial.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'projects.html'
      })



      $locationProvider.html5Mode(true);
  }]);

 // .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
 //  $routeProvider
 //    .when('/about', {
 //      templateUrl: "about.html"
 //    })
 //    .when('/contact', {
 //      templateUrl: "contact.html"
 //    })
 //    .when('/projects', {
 //      templateUrl: "projects.html"
 //    })
 //    .otherwise({
 //      templateUrl: "initial.html"
 //    });
 //   $locationProvider.html5Mode(true);
 // }]);