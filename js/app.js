﻿var app = angular.module('MAQSoftwareApp', ['ngRoute', 'ngResource']);
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
    })
    .when('/news', {
        templateUrl: '/views/news.html',
        controller: "NewsController"
    })
    .when('/careers', {
        templateUrl: '/views/careers.html',
        controller: "CareersController"
    })
    .when('/contact', {
        templateUrl: '/views/contact.html',
        controller: "ContactController"
    })
    .when('/careersinus', {
        templateUrl: '/views/careersinUS.html',
        controller: "CareersinUSController"
    })
    .when('/careersinind', {
        templateUrl: '/views/careersinInd.html',
        controller: "CareersinIndController"
    })
    .when('/powerbisupport', {
        templateUrl: '/views/powerbisupport.html',
        controller: "PowerBISupportController"
    })
    .when('/privacystatement', {
        templateUrl: '/views/privacystatement.html'
    });
    $routeProvider.otherwise({ redirectTo: "/" });
})
.controller('HomeController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();        
    });
}).controller('ContactController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {        
        contactConstructor();
    });
}).controller('NewsController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        newsConstructor();
    });
}).controller('CareersController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        onYouTubeIframeAPIReady();
        careersConstructor();
    });
}).controller('CareersinUSController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        onYouTubeIframeAPIReady();
        careersInUS();
    });
}).controller('CareersinIndController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        onYouTubeIframeAPIReady();
        careersInInd();
    });
}).controller('PowerBISupportController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        redirectPowerBI();
    });
});
