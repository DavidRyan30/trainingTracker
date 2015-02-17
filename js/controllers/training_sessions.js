myApp.controller('TrainingSessionController', ['$location','$scope','TrainingSessionService',
	function($location, $scope, TrainingSessionService){

////returns all rowers
	$scope.sessions = TrainingSessionService.getTrainingSessions();

	$scope.training_session = TrainingSessionService.addTrainingSession();


	$scope.addTrainingSession = function(){
    		$scope.training_session.$push({
    			day: $scope.session.day,
    			distance: $scope.session.distance,
    			rate: $scope.session.rate,
    			time: $scope.session.time,
    			note: $scope.session.note
    		})
    		 $scope.session.day=''
             $scope.session.distance=''
             $scope.session.rate=''
             $scope.session.time=''
             $scope.session.note=''
    	}

}]);





