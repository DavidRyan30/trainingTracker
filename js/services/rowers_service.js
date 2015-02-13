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
		 },

//end add rower

//start show individual rower
    //TODO
//end individual rower
      
//update individual rower
	//TODO
//end update individual rower
	 }
  return api
}])



