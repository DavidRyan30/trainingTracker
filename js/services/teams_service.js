myApp.factory('TeamsService', ['$firebase', function($firebase){
    var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/"
    var ref = new Firebase(FIREBASE_URL + 'teams');
    var teams = $firebase(ref);

   var api={

        getTeams : function(){
            return teams.$asObject();
        },

        addTeam : function(){
        return teams
        },

        getRowerList : function(){
               var rowerRef = new Firebase('https://rowint-trainingtrack.firebaseio.com/' + 'rowers');
               var rowers = $firebase(rowerRef);
               return rowers.$asObject();
        }

    }

    return api
}])