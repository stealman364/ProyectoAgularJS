'use strict';

angular.module('myApp', [])
  .controller('movieCntrl', function($scope, $http){
    var searchNew;
    var searchNewClick;

    $scope.searchMovie = function(){
      
      searchNew = setTimeout(fetch, 1000);
    };

    $scope.searchMovieClick = function(){
      setTimeout(fetchClick, 1000);
    };

    function fetchClick() {
      $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&plot=full&apikey=f12ba140")
       .success(function(response){ $scope.details = response; });

       $http.get("https://www.omdbapi.com/?s=" + $scope.search + "&type=movie&apikey=f12ba140")
       .success(function(response){  $scope.results = response; });
    }

    function fetch() {
      $http.get("https://www.omdbapi.com/?s=" + $scope.search + "&type=movie&apikey=f12ba140")
       .success(function(response){  $scope.results = response; });
    }

    $scope.showMovie = function(movie) {
      $scope.search = movie.Title;
      $scope.searchMovieClick();
    }
  });
