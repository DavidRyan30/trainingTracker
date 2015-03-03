myApp.controller('RowersController', ['$location', '$rootScope', '$firebase', '$scope','$routeParams','RowersService', 'TeamsService',
	function($location, $rootScope, $firebase, $scope, $routeParams, RowersService, TeamsService){
//returns all rowers
	$scope.rowers = RowersService.getRowers();
    $scope.rower


    $scope.setEdit = function(rower_id){
        
        $location.path('/rowers/'+rower_id)
    }

    $scope.rower =  RowersService.getARower($routeParams.rower_id)

//update individual rower
    $scope.updateRower = function(){ 

       var firebaseRef = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers/'+$routeParams.rower_id);

        firebaseRef.update(
            {
                name: $scope.rower.name,
                age: $scope.rower.age,
                weight: $scope.rower.weight,
                height: $scope.rower.height
            }
        )

        $location.path('/rowers/')
    }

////////////////////////

//Delete a rower
    $scope.deleteRower = function(regRower){

        var firebaseRef = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers/'+regRower);
        firebaseRef.remove();
        var teams = TeamsService.getTeams();
    }
////////////////////


}]);

