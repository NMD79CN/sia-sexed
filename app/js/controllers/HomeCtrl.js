'use strict';

/* Controllers */
var sexEdControllers = angular.module('SexEdControllers', ['ngRoute', 'duParallax', 'googlechart']);

sexEdControllers.controller('HomeCtrl', function ($scope, parallaxHelper) {
  $scope.background = parallaxHelper.createAnimator(-0.3, 100, -100);
});