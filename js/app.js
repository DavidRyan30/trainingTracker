var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/rowers',
            {
                controller: 'IndividualRowers',
                templateUrl: '/views/rowers.html'
            })
        .when('/home',
            {
                controller: 'HomeContentController',
                templateUrl: '/views/welcome.html'
            })       
        .otherwise({ redirectTo: '/home' });
})


myApp.controller('IndividualRowers', function IndividualRowers($scope){
	$scope.rowers = [
	{'name' : 'David Ryan','age' : 37,'weight' : 100, 'height': 1.7},
	{'name' : 'John Finn','age' : 37,'weight' : 95, 'height': 2.2},
	{'name' : 'Jody Waters', 'age' : 47, 'weight': 100, 'height' : 1.8},
	{'name' : 'Paddy Kehoe', 'age' : 42, 'weight': 105, 'height' : 1.9}
	]
	$scope.newRower = { }
    $scope.addRower = function () {
        $scope.rowers.push({ name: $scope.newRower.name, age: $scope.newRower.age, weight: $scope.newRower.weight, height: $scope.newRower.height })
        $scope.newRower = {}
    }

    $scope.rowerNoInRange = function () {
        return  $scope.rowerNo != '' && 
                $scope.rowerNo >=0 && 
                $scope.rowerNo < $scope.rowers.length
    }
});