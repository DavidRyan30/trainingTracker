myApp.controller('RowersController', ['$location', '$firebase', '$scope','$routeParams','RowersService', 'TeamsService',
	function($location, $firebase, $scope, $routeParams, RowersService, TeamsService){


	//sets fields for edit
//	var rowerRef = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers/'+$routeParams.regRower);
//    var rowerRefObj = $firebase(rowerRef);
//	$scope.rower.detail.name = rowerRefObj.name
//	$scope.rower.detail.age = rowerRefObj.age
//	$scope.rower.detail.weight = rowerRefObj.weight
//	$scope.rower.detail.height = rowerRefObj.height
	/////////////////////

//returns all rowers
	$scope.rowers = RowersService.getRowers();


//start show individual rower


///////////////////////
// $scope.formData = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers/'+$routeParams.regRower)
// console.log($scope.formData.name)


    // $scope.rower = RowersService.getARower($routeParams.rower_index)
    // console.log($routeParams.rower_index)
    // console.log($scope.rower)
    $scope.rowerDets =function(){
        $scope.rower = RowersService.getARower($routeParams.rower_index)
        console.log($routeParams.rower_index)
        console.log($scope.rower)
    }

//update individual rower
    $scope.updateRower = function(){
 
       var firebaseRef = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers/'+$routeParams.rower_index);
        firebaseRef.update(
            {
                name: $scope.rower.detail.name,
                age: $scope.rower.detail.age,
                weight: $scope.rower.detail.weight,
                height: $scope.rower.detail.height
            }
        )
    }

////////////////////////

//Delete a rower
    $scope.deleteRower = function(regRower){

        console.log(regRower)
        var firebaseRef = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers/'+regRower);
        firebaseRef.remove();
        var teams = TeamsService.getTeams();
    }
////////////////////
    $scope.go = function ( path ) {
  $location.path( path );
        };

}]);

