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


    	$scope.register = function(){
    		AuthService.register($scope.rower)
    		.then(function(rower){
    			AuthService.login($scope.rower)
    			$location.path('/rowers')
    		}), function(error){
    			$scope.message = error.toString();
    		}

    	}
});

