myApp.controller('AuthController',
	function($location, $scope, $firebaseSimpleLogin, AuthService){
	//login as a rower
    	$scope.loginRower = function(){
    		AuthService.login($scope.rower)
    			.then(function(rower){
				$location.path('/home')
    			}, function(error){
    				$scope.message = error.toString();
    			})
    	}


    	$scope.register = function(){
    		AuthService.register($scope.rower)
    		.then(function(rower){
    			$location.path('/home')
    		}), function(error){
    			$scope.message = error.toString();
    		}

    	}
});

