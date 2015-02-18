myApp.factory('AuthService', function($firebase, $firebaseSimpleLogin, FIREBASE_URL, $location, $rootScope){

    var authRef = new Firebase(FIREBASE_URL);
    var rowerAuth = $firebaseSimpleLogin(authRef);

    var api ={
        login : function(rower){
            var rowerRef = new Firebase(FIREBASE_URL + 'rowers/' + rower.uid);
            var rowerObj = $firebase(rowerRef).$asObject();
            rowerObj.$loaded().then(function(){
                $rootScope.currentRower = rowerObj;

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
        .then(function(regRower){
            var reference = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers')
            var firebaseRowers = $firebase(reference);
            console.log(rower)
            if(rower.coach==null){
                rower.coach=false
            }
            if(rower.gender==null){
                rower.gender="male"
            }

            if(rower.age == null){
                rower.age=0
            }
            if(rower.weight== null){
                rower.weight=0
            }
            if(rower.height== null){
                rower.height=0
            }
            console.log(rower)
            var rowerInfo = {
               regRower: regRower.uid,
               name: rower.name,
               age: rower.age,
               weight: rower.weight,
               height: rower.height,
               email: rower.email,
               gender: rower.gender,
               coach: rower.coach
            }
            firebaseRowers.$set(regRower.uid, rowerInfo);
        });

    }

   }
   return api;
});