myApp.factory('AuthService', function($firebase, $firebaseSimpleLogin, FIREBASE_URL, $location, $rootScope){

        	var authRef = new Firebase(FIREBASE_URL);
        	var rowerAuth = $firebaseSimpleLogin(authRef);

        	var api ={
        	    login : function(rower){
        	        var rowerRef = new Firebase(FIREBASE_URL + 'rowers/' + rower.uid);
        	        var rowerObj = $firebase(rowerRef).$asObject();
        	        rowerObj.$loaded().then(function(){
        	            $rootScope.currentRower = rowerObj;

        	            console.log($rootScope.currentRower);
        	        });

        	        return rowerAuth.$login('password', {
        	        email: rower.email,
        	        password: rower.password
        	        });
        	    },

        	    logout : function(){
        	        return rowerAuth.$logout();
        	    },

        	    register : function(rower){
        	    return rowerAuth.$createUser(rower.email, rower.password)
        	    .then(function(regUser){
        	        var reference = new Firebase(FIREBASE_URL + 'rowers')
        	        var firebaseRowers = $firebase(reference);

        	        var rowerInfo = {
        	           regUser: regUser.uid,
        	           name: rower.name,
        	           age: rower.age,
        	           weight: rower.weight,
        	           height: rower.height,
        	           email: rower.email
        	        }

        	        firebaseRowers.$set(regUser.uid, rowerInfo);
        	    });

        	    },

        	    signedIn : function(){
        	        return rowerAuth.rower != null;
        	    }
        	}

//        	add signed in function to global or root scope to ensure it is available from the entire site.
            $rootScope.signedIn = function(){
                return api.signedIn();
            }
        	return api;
});