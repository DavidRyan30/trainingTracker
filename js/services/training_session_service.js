myApp.factory('TrainingSessionService', ['$firebase', function($firebase){

	var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/"
	var ref = new Firebase(FIREBASE_URL + 'trainingsessions');
	var rowers = $firebase(ref);


	var api = {
// Start get all rowers
		getTrainingSessions : function() {
			return trainingSessions.$asObject()
			},
// End get all rowers

//Start add rower
		addTrainingSession : function(){
            return trainingSession
		 }
//End add rowers
	 }
  return api
}])



