app = angular.module('movieApp', ['firebase']);

app.constant('FIREBASE_URI', 'https://blistering-fire-5819.firebaseio.com/demo/');

app.controller("MovieCtrl", ['$scope', 'MoviesService', function($scope, MoviesService){
	$scope.newMovie = {title: '', theater: '', date: '', time: ''}
	$scope.movies = MoviesService.getMovies();

	$scope.addMovie = function() {
		MoviesService.addMovie(angular.copy($scope.newMovie));
		$scope.newMovie = { title: '', theater: '', date: '', time: ''};
	};

	$scope.updateMovie = function(id) {
		MoviesService.updateMovie(id);
	};

	$scope.removeItem = function(item) {
		ItemService.removeItem(item);
	}
}]);

app.factory('MoviesService', ['FIREBASE_URI', '$firebaseArray', function (FIREBASE_URI, $firebaseArray){
	var ref = new Firebase(FIREBASE_URI);
	var movies = $firebaseArray(ref);

	var getMovies = function() {
		return movies;
	};

	var addMovie = function(movie) {
		movies.$add(movie);
	};

	var updateMovie = function (id) {
		movies.$save(id);
	};

	var removeMovie = function (id) {
		movies.$remove(id);
	};

	return {
		getMovies: getMovies,
		addMovie: addMovie,
		updateMovie: updateMovie,
		removeMovie: removeMovie
	}
}]);
