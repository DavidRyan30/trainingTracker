myApp.controller('RowersController', ['$location', '$firebase', '$scope','RowersService',
	function($location, $firebase, $scope, RowersService){

//returns all rowers
	$scope.rowers = RowersService.getRowers();


//start show individual rower

///////////////////////


//update individual rower

////////////////////////

//Delete a rower
    $scope.deleteRower = function(regRower){

        console.log(regRower)
        var firebaseRef = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers/'+regRower);

        firebaseRef.remove();
    }
////////////////////


}]);

