'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/inspiration', {templateUrl: 'partials/inspiration.html', controller: 'EmptyController'});

    $routeProvider.when('/inspiration/codeAcademy', {templateUrl: 'partials/inspiration/codeAcademy.html', controller: 'EmptyController'});
    $routeProvider.when('/inspiration/maps', {templateUrl: 'partials/inspiration/maps.html', controller: 'EmptyController'});
    $routeProvider.when('/inspiration/dayOne', {templateUrl: 'partials/inspiration/dayOne.html', controller: 'EmptyController'});

    $routeProvider.when('/projectBrief', {templateUrl: 'partials/projectBrief.html', controller: 'EmptyController'});
    $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'EmptyController'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
