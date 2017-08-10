var app = angular.module('MAQSoftwareApp', ['ngRoute', 'ngResource']);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
    .when("/", {
        templateUrl: "/views/home.html",
        controller: "HomeController"
    })
    .when('/expertise', {
        templateUrl: '/views/datamanagement.html'
    })
    .when('/expertise/datamanagement', {
        templateUrl: '/views/datamanagement.html'
    })
    .when('/expertise/artificialintelligence', {
        templateUrl: '/views/artificialintelligence.html'
    })
    .when('/expertise/selfservicebi', {
        templateUrl: '/views/selfservicebi.html'
    })
    .when('/expertise/appdevelopment', {
        templateUrl: '/views/appdevelopment.html'
    })
    .when('/expertise/cloudtransformation', {
        templateUrl: '/views/cloudtransformation.html'
    })
    .when('/expertise/collaborationcontent', {
        templateUrl: '/views/collaborationcontent.html'
    })
    .when('/engagement', {
        templateUrl: '/views/about.html'
    })
    .when('/engagement/about', {
        templateUrl: '/views/about.html'
    })
    .when('/engagement/deliveryapproach', {
        templateUrl: '/views/deliveryapproach.html'
    })
    .when('/engagement/recognitions', {
        templateUrl: '/views/recognitions.html'
    })
    .when('/engagement/clients', {
        templateUrl: '/views/clients.html'
    });
    $routeProvider.otherwise({ redirectTo: "/" });

})
.controller('HomeController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
    });
});