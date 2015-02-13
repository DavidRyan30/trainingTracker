myApp.controller('RowersController', ['$location','$scope','RowersService',
	function($location, $scope, RowersService){

	$scope.rowers = RowersService.getRowers();


	$scope.addRower = function(){
		$scope.rowers = RowersService.addRower();

		$scope.rowers.$push({
			name: $scope.rowername,
			weight: $scope.rowerweight,
			age: $scope.rowerage,
			height: $scope.rowerheight
		})
		$location.path('/rowers')
	}

	}]);

