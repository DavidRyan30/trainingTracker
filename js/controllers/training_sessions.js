myApp.controller('TrainingSessionController', ['$location','$scope', '$rootScope','TrainingSessionService',
	function($location, $scope, $rootScope, TrainingSessionService){

        var user = $rootScope.currentRower

if($rootScope.signedIn()){
////returns all rowers
	$scope.sessions = TrainingSessionService.getTrainingSessions(user.regRower);
//getting access to the add training_session method
	$scope.training_session = TrainingSessionService.addTrainingSession(user.regRower);
////////////////////////////////////////
}

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





