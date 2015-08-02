'use strict';

/* Controllers */
var sexEdControllers = angular.module('SexEdControllers');

sexEdControllers.controller('TalkCtrl', function ($scope, $http) {
	$http.get('http://localhost:8080/api/stories')
		.success(function(data) {
			$scope.stories = data; 
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.addStory = function(input) {
		$http.post('http://localhost:8080/api/stories', {text:input}) 
			.success(function(data) {
				$scope.stories = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.removeStory = function(id) {
		$http.delete('http://localhost:8080/api/stories' + id)
			.success(function(data) {
				$scope.stories = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
});