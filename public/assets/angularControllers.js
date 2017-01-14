var app = angular.module('product-details', []);
app.controller('homeController', function($scope, $http) {
    $http.get("/homedata")
    .then(function(response) {
        $scope.products = response.data;
        console.log(response.data);
    });

    /* Same as
    $http.get('/homedata')
	  .success(function(data, status, headers, config) {
	     $scope.products = data;
  });*/
});
