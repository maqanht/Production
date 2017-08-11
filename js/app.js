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
    });
    $routeProvider.otherwise({ redirectTo: "/" });

})
.controller('HomeController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();       
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
});

Date.prototype.format = function () {
    "use strict";
    var arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        sValue = arrMonths[this.getMonth()] + ' ' + this.getDate() + ', ' + this.getFullYear();
    return sValue;
};

function getParameterByName(name) {
    "use strict";
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.href);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function isCareersPage() {
    if ($('#careers').length) {
        return true;
    }
    return false;
}