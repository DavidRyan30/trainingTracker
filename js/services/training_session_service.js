myApp.factory('TrainingSessionService', ['$firebase',  function($firebase, $rootScope){

	var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/rowers/"
	var ref = new Firebase(FIREBASE_URL);
	var session = $firebase(ref);


	var api = {
		getTrainingSessions : function(regRower) {
			var ref = new Firebase(FIREBASE_URL + regRower + '/sessions/');
        	var session = $firebase(ref);
			return session.$asObject()
			},

		addTrainingSession : function(regRower){
            var ref = new Firebase(FIREBASE_URL + regRower + '/sessions/');
            var session = $firebase(ref);
            return session
		 }
	 }
  return api
}])



