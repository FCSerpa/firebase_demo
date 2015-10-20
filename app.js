app = angular.module('movieApp', []);

app.controller("MovieCtrl", function($scope){
	$scope.movie = {
		title: "Star Wars VII: The Force Awakens",
		theater: "Alamo Drafthouse",
		date: "12/17/2015",
		time: "10:30pm"
	}

});