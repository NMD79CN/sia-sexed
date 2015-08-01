'use strict';

/* Controllers */
var sexEdControllers = angular.module('SexEdControllers');

sexEdControllers.controller('OptionCtrl', function ($scope) {
	$scope.category = 'option';
	console.log($scope.category);
});