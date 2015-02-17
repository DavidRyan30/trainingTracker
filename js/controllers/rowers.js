myApp.controller('RowersController', ['$location','$scope','RowersService',
	function($location, $scope, RowersService){

//returns all rowers
	$scope.rowers = RowersService.getRowers();


//start add rower
//	$scope.addRower = function(){
//		$scope.rowers = RowersService.addRower();
//		$scope.rowers.$push({
//			name: $scope.rowername,
//			email: $scope.roweremail,
//			password: $scope.rowerpassword,
//			weight: $scope.rowerweight,
//			age: $scope.rowerage,
//			height: $scope.rowerheight
//			gender: $scope.rowerg
//		}).then($location.path('/rowers'))
//	}
/////////////////////

//start show individual rower

///////////////////////


//update individual rower

////////////////////////


}]);

