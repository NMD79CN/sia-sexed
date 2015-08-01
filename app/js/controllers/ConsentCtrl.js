'use strict';

/* Controllers */
var sexEdControllers = angular.module('SexEdControllers');

sexEdControllers.controller('ConsentCtrl', function ($scope) {
	$scope.category = 'consent';
	console.log($scope.category);
});