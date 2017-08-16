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
        templateUrl: '/views/datamanagement.html',
        controller: "HomeController"
    })
    .when('/expertise/datamanagement', {
        templateUrl: '/views/datamanagement.html',
        controller: "HomeController"
    })
    .when('/expertise/artificialintelligence', {
        templateUrl: '/views/artificialintelligence.html',
        controller: "HomeController"
    })
    .when('/expertise/selfservicebi', {
        templateUrl: '/views/selfservicebi.html',
        controller: "HomeController"
    })
    .when('/expertise/appdevelopment', {
        templateUrl: '/views/appdevelopment.html',
        controller: "HomeController"
    })
    .when('/expertise/cloudtransformation', {
        templateUrl: '/views/cloudtransformation.html',
        controller: "HomeController"
    })
    .when('/expertise/collaborationcontent', {
        templateUrl: '/views/collaborationcontent.html',
        controller: "HomeController"
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
        templateUrl: '/views/privacystatement.html',
        controller: "PrivacyStatementController"
    });
    $routeProvider.otherwise({ redirectTo: "/" });
})
.controller('HomeController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();        
    });
}).controller('ContactController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        contactConstructor();
    });
}).controller('NewsController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        newsConstructor();
    });
}).controller('CareersController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        accordion();
        //onYouTubeIframeAPIReady();
        //careersConstructor();
    });
//}).controller('CareersinUSController', function ($scope) {
//    $scope.$on('$viewContentLoaded', function () {
//        //onYouTubeIframeAPIReady();
//        //careersInUS();
//    });
//}).controller('CareersinIndController', function ($scope) {
//    $scope.$on('$viewContentLoaded', function () {
//        //onYouTubeIframeAPIReady();
//        //careersInInd();
//    });
}).controller('PowerBISupportController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        redirectPowerBI();
    });
}).controller('PrivacyStatementController', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setHeader();
    });
}).directive('careerTabs', function () {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {            
            setTimeout(function () {
                $(elm).tabs();
            }, 0);
        }
    };
});
