myApp.factory('TrainingSessionService', ['$firebase', function($firebase){

	var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/"
	var ref = new Firebase(FIREBASE_URL + 'sessions');
	var sessions = $firebase(ref);


	var api = {
		getTrainingSessions : function() {
			return sessions.$asObject()
			},
		addTrainingSession : function(){
            return sessions
		 }
	 }
  return api
}])



