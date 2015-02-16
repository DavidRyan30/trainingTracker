myApp.controller('AuthController',
	function($location, $scope, $firebaseSimpleLogin, AuthService){
	//login as a rower
    	$scope.loginRower = function(){
    		AuthService.login($scope.rower)
    			.then(function(rower){
				$location.path('/rowers')
    			}, function(error){
    				$scope.message = error.toString();
    			})
    	}
});

