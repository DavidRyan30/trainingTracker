myApp.factory('TrainingSessionService', ['$firebase', function($firebase){

	var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/sessions"
	var ref = new Firebase(FIREBASE_URL);
	var session = $firebase(ref);


	var api = {
		getTrainingSessions : function() {
			return session.$asObject()
			},

		addTrainingSession : function(){
            return session
		 }
	 }
  return api
}])



