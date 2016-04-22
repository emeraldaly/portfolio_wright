angular.module("ClassApp", ["ngRoute"])
 .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
  $routeProvider
    .when('/first', {
      templateUrl: "first.html"
    })
    .when('/second', {
      templateUrl: "second.html"
    })
    .when('/third', {
      templateUrl: "third.html"
    })
    .when('/fourth', {
      templateUrl: "fourth.html"
    })
    .when('/fifth', {
      templateUrl: "fifth.html"
    })
    .otherwise({
      templateUrl: "initial.html"
    });
   $locationProvider.html5Mode(true);
 }]);