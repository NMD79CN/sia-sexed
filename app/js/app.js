'use strict';

/* App Module */

var sexEdApp = angular.module('SexEdApp', ['ngRoute', 'SexEdControllers']);


sexEdApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/safer-sex', {
      templateUrl: 'partials/safer-sex.html',
      controller: 'SaferSexCtrl'
    })
    .when('/consent', {
      templateUrl: 'partials/consent.html',
      controller: 'ConsentCtrl'
    })
    .when('/sexuality', {
      templateUrl: 'partials/sexuality.html',
      controller: 'SexualityCtrl'
    })
    .when('/option', {
      templateUrl: 'partials/option.html',
      controller: 'OptionCtrl'
    })
    .when('/talk', {
      templateUrl: 'partials/talk.html',
      controller: 'TalkCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);