angular.module("ClassApp", ["ngRoute"])
 .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
  $routeProvider
    .when('/about', {
      templateUrl: "about.html"
    })
    .when('/clickgame', {
      templateUrl: "clickgame.html"
    })
    .when('/contact', {
      templateUrl: "contact.html"
    })
    .when('/blog', {
      templateUrl: "blog.html"
    })
    .when('/games', {
      templateUrl: "games.html"
    })
    .when('/projects', {
      templateUrl: "projects.html"
    })
    .when('/rps', {
      templateUrl: "rps.html"
    })
    .otherwise({
      templateUrl: "initial.html"
    });
   $locationProvider.html5Mode(true);
 }]);