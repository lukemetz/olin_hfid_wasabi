'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/inspiration', {templateUrl: 'partials/inspiration.html', controller: 'EmptyController'});

    $routeProvider.when('/inspiration/codeAcademy', {templateUrl: 'partials/inspiration/codeAcademy.html', controller: 'EmptyController'});
    $routeProvider.when('/inspiration/maps', {templateUrl: 'partials/inspiration/maps.html', controller: 'EmptyController'});
    $routeProvider.when('/inspiration/calendar', {templateUrl: 'partials/inspiration/calendar.html', controller: 'EmptyController'});
    $routeProvider.when('/inspiration/dayOne', {templateUrl: 'partials/inspiration/dayOne.html', controller: 'EmptyController'});

    $routeProvider.when('/projectBrief', {templateUrl: 'partials/projectBrief.html', controller: 'EmptyController'});
    $routeProvider.when('/needs', {templateUrl: 'partials/needs.html', controller: 'EmptyController'});
    $routeProvider.when('/breakdown', {templateUrl: 'partials/divisionOfLabor.html', controller: 'EmptyController'});
    $routeProvider.when('/interaction', {templateUrl: 'partials/interaction.html', controller: 'EmptyController'});
    $routeProvider.when('/designDevelopment', {templateUrl: 'partials/designDevelopment.html', controller: 'EmptyController'});
    $routeProvider.when('/onlinePrototype', {templateUrl: 'partials/onlineprototype.html', controller: 'EmptyController'});
    $routeProvider.when('/designRefine', {templateUrl: 'partials/designRefine.html', controller: 'EmptyController'});
    $routeProvider.when('/usability', {templateUrl: 'partials/usability.html', controller: 'EmptyController'});
    $routeProvider.when('/heuristicFix', {templateUrl: 'partials/heuristicFix.html', controller: 'EmptyController'});
    $routeProvider.when('/finalWrite', {templateUrl: 'partials/finalWrite.html', controller: 'EmptyController'});
    $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'EmptyController'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
