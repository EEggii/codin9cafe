 angular.module('codin9cafe', 
 	['ngMaterial', 
 	'ui.router', 
 	'angular-parallax',
 	'codin9cafe.controllers'
 	])
 .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url:"/main",
            templateUrl: "templates/main.html",
            controller: "mainCtrl",
        });
    $urlRouterProvider.otherwise('/main');
})