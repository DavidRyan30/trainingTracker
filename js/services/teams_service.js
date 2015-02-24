myApp.factory('TeamsService', ['$firebase', function($firebase){
    var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/"
    var ref = new Firebase(FIREBASE_URL + 'teams');
    var teams = $firebase(ref);

    var rowerRef = new Firebase('https://rowint-trainingtrack.firebaseio.com/rowers');
    var rowers = $firebase(rowerRef);

   var api={

        getTeams : function(){
            return teams.$asObject();
        },

        addTeam : function(){
        return teams
        },

        getRowerList : function(){
               
               return rowers.$asObject();
        },

        getTeamArray : function(){
          return teams.$asArray();
        },

         getRowerArray : function(){
          return rowers.$asArray();
        },
        addMembers : function(team){
         var ref = new Firebase('https://rowint-trainingtrack.firebaseio.com/teams/'+team.$id+'/members/');

         console.log(ref.toString())
          // var ref = new Firebase(FIREBASE_URL +'teams/'+ team + '/members/');
          var members = $firebase(ref);
          return members
        }

    }

    return api
}])