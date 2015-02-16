myApp.factory('AuthService', function($firebase, $firebaseSimpleLogin, FIREBASE_URL, $location){

        	var authRef = new Firebase(FIREBASE_URL);
        	var rowerAuth = $firebaseSimpleLogin(authRef);

        	var api ={
        	    login : function(rower){
        	        return rowerAuth.$login('password', {
        	        email: rower.email,
        	        password: rower.password
        	        });
        	    }
        	}
        	return api;
});