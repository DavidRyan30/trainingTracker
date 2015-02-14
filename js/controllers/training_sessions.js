myApp.controller('TrainingSessionService', ['$location','$scope','TrainingSessionService',
	function($location, $scope, TrainingSessionService){

//returns all rowers
	$scope.rowers = TrainingSessionService.getRowers();

//start add rower
	$scope.addRower = function(){
		$scope.rowers = TrainingSessionService.addRower();
		$scope.rowers.$push({
			name: $scope.rowername,
			weight: $scope.rowerweight,
			age: $scope.rowerage,
			height: $scope.rowerheight
		}).then($location.path('/trainingsessions'))

	}
}]);





