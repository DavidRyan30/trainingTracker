myApp.controller('TrainingSessionController', ['$location','$scope','TrainingSessionService',
	function($location, $scope, TrainingSessionService){

////returns all rowers
	$scope.session = TrainingSessionService.getTrainingSessions();

	$scope.addTrainingSession = function(){
    		$scope.session = TrainingSessionService.addTrainingSession();
    		$scope.session.$push({
    			training_day: $scope.training_day,
    			distance: $scope.distance,
    			stroke_rate: $scope.stroke_rate,
    			time: $scope.time,
    			training_note: $scope.training_note
    		})
    	}
}]);





