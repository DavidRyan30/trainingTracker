myApp.controller('RowersController', 
	function($scope, $firebase){
	var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/"
	var ref = new Firebase(FIREBASE_URL + 'rowers');
	var rowers = $firebase(ref);
	$scope.rowers = rowers.$asObject();
});