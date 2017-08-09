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
    .when('/expertise/selfservicebi', {
        templateUrl: '/views/selfservicebi.html',
    })
    .when('/expertise/appdevelopment', {
        templateUrl: '/views/appdevelopment.html',
    })
    .when('/expertise/cloudtransformation', {
        templateUrl: '/views/cloudtransformation.html',
    })
    .when('/expertise/collaborationcontent', {
        templateUrl: '/views/collaborationcontent.html',
    })
    $routeProvider.otherwise({ redirectTo: "/" });
   
});