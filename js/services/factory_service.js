myApp.factory('RowersService', ['$firebase', function($firebase){
	var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/"
	var ref = new Firebase(FIREBASE_URL + 'rowers');
	var rowers = $firebase(ref);
	var api = {
		getRowers : function() {
			return rowers.$asObject()
			},
		addRower : function(){
            return rowers
		 }
	 }
  return api
}])



