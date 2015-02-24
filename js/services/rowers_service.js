myApp.factory('RowersService', ['$firebase', function($firebase, FIREBASE_URL){
	var rowerRef = new Firebase('https://rowint-trainingtrack.firebaseio.com/' + 'rowers');
	var rowers = $firebase(rowerRef);
	var rowersObj = $firebase(rowerRef).$asObject();

	
	var api = {
// Start get all rowers
		getRowers : function() {
			return rowersObj
			},
// End get all rowers
        updateRower : function(){
            return rowers;
        },
        getARower : function(regRower){
        	 console.log(regRower)
        	 var firebaseReference = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers/'+regRower) 
        	 var rower = $firebase(firebaseReference)
        	 // console.log(rower.name)
        	 return rower.$asObject();
        }
	 }
  return api
}])



