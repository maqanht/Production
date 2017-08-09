var app = angular.module('MAQSoftwareApp', ['ngRoute', 'ngResource']);
app.config(function ($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
    .when("/", {
        templateUrl: "/views/home.html"
    })
    .when('/expertise/datamanagement', {
        templateUrl: '/views/datamanagement.html',
    })
    .when('/expertise/artificialintelligence', {
        templateUrl: '/views/artificialintelligence.html',
    })
    $routeProvider.otherwise({ redirectTo: "/" });

});