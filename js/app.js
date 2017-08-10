var app = angular.module('MAQSoftwareApp', ['ngRoute', 'ngResource']);
app.config(function ($routeProvider, $locationProvider) {
    //check browser support
    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
    $routeProvider
    .when("/", {
        templateUrl: "/views/home.html",
        controller: "HomeController"
    }).when('/expertise/datamanagement', {
        templateUrl: '/views/datamanagement.html',
        controller: "ExpertiseController"
    }).when('/expertise/artificialintelligence', {
        templateUrl: '/views/artificialintelligence.html',
        controller: "ExpertiseController"
    }).when('/expertise/selfservicebi', {
        templateUrl: '/views/selfservicebi.html',
        controller: "ExpertiseController"
    }).when('/expertise/appdevelopment', {
        templateUrl: '/views/appdevelopment.html',
        controller: "ExpertiseController"
    }).when('/expertise/cloudtransformation', {
        templateUrl: '/views/cloudtransformation.html',
        controller: "ExpertiseController"
    }).when('/expertise/collaborationcontent', {
        templateUrl: '/views/collaborationcontent.html',
        controller: "ExpertiseController"
    });
    $routeProvider.otherwise({ redirectTo: "/" });

})
.controller('HomeController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();       
    });
})
.controller('ExpertiseController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {        
        if ('objectFit' in document.documentElement.style === false) {
            console.log("false");
            //objectFitVideos();
        } else {
            console.log("true");
        }
    });
});