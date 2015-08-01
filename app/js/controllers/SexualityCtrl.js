'use strict';

/* Controllers */
var sexEdControllers = angular.module('SexEdControllers');

sexEdControllers.controller('SexualityCtrl', function ($scope) {
	$scope.category = 'sexuality';
	console.log($scope.category);
});