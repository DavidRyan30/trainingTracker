myApp.factory('RowersService', ['$firebase', function($firebase){

	var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/"
	var ref = new Firebase(FIREBASE_URL + 'rowers');
	var rowers = $firebase(ref);


	var api = {
// Start get all rowers
		getRowers : function() {
			return rowers.$asObject()
			},
// End get all rowers

//Start add rower
		addRower : function(){
            return rowers
		 }
//End add rowers
	 }
  return api
}])



