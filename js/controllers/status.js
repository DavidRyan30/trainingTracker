myApp.controller('StatusController', function(
       $location, $scope, $rootScope, $firebaseSimpleLogin, AuthService, $firebase, FIREBASE_URL){

       $scope.logout = function(){
        AuthService.logout();
        $location.path('/login')
       }

       $rootScope.$on('$firebaseSimpleLogin:login', function(e, authenticatedUser){
            var reference = new Firebase(FIREBASE_URL + '/rowers/' + authenticatedUser.uid);
            var rower = $firebase(reference).$asObject();
            rower.$loaded().then(function(){
                $rootScope.currentRower = rower;
            })
       })

      $rootScope.$on('$firebaseSimpleLogin:logout', function(e, authenticatedUser){
            $rootScope.currentRower = null;
      })

      $scope.getCurrentRower = function(){
        return $rootScope.currentRower;
      }


})