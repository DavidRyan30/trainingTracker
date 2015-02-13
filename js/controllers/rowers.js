myApp.controller('RowersController', ['$location','$scope','RowersService',
	function($location, $scope, RowersService){

//returns all rowers
	$scope.rowers = RowersService.getRowers();

//start add rower
	$scope.addRower = function(){
		$scope.rowers = RowersService.addRower();
		$scope.rowers.$push({
			name: $scope.rowername,
			weight: $scope.rowerweight,
			age: $scope.rowerage,
			height: $scope.rowerheight
		}).then($location.path('/rowers'))

	}
//end add rower

//start show individual rower

//end individual rower


//update individual rower

//end update individual rower
}]);

