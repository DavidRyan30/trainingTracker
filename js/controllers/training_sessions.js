myApp.controller('TrainingSessionController', ['$location','$scope', '$controller','$rootScope','TrainingSessionService',
	function($location, $scope, $controller, $rootScope, TrainingSessionService){



    //initialising an instance of status to gain access to the current user
    var statusController = $scope.$new();
    $controller('StatusController', {$scope : statusController});
    var user = statusController.getCurrentRower();
    ////////////////////////

////returns all rowers
	$scope.sessions = TrainingSessionService.getTrainingSessions(user.regRower);
//getting access to the add trainsession method
	$scope.training_session = TrainingSessionService.addTrainingSession(user.regRower);
////////////////////////////////////////
    console.log(user.regRower)
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





