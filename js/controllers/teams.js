myApp.controller('TeamsController', ['$location','$scope', '$rootScope', 'TeamsService', '$routeParams',
	function($location, $scope, $rootScope, TeamsService, $routeParams){
		// $scope.team_items= [2, 4, 8]
		var param1 = $routeParams.team_index;
		// console.log("team" + param1)
		$scope.team_items = { '2': 'Two', '4': 'Four','8': 'Eight'};
		$scope.team_catagories = ['standard', 'light weight', 'veteran', 'pre-veteran']
		var teamMembers ={}
		$scope.teamsArray = TeamsService.getTeamArray();
		var rowerArray = TeamsService.getRowerArray();
			// console.log($scope.teamsArray)
		
		//returns all rowers
		$scope.teams = TeamsService.getTeams();

		$scope.rowers = TeamsService.getRowerList();



		$scope.go_to_manager=function(team){
			$location.path('/team_manager/'+team.id)	
		}

		$scope.possibleMembers = getPossibleRowers(rowerArray);
		


//This function is designed to filter rowers based on their attributes and the attributes of the target team
// to assertain their suitability to be available for a specific team.

		function getPossibleRowers(rowerArray){
			var rowers=[]
			var genderFiltered = []
			var weightFiltered =[]

			$scope.team = {}

			//getting team selected from list
			for(var i = 0; i < $scope.teamsArray.length; i++){
			
				if($scope.teamsArray[i].id === param1){
					
					$scope.team = $scope.teamsArray[i]

				} 
			}
			//filter on gender
			for(var g =0; g<rowerArray.length; g+=1){
			
				if(rowerArray[g].gender === $scope.team.gender){
					
					genderFiltered.push(rowerArray[g])	

				}
			}

			//filter on if the team is light weight and the get rowers with weight <= 75
			if($scope.team.catagory == new String("light weight")){
				for (var w = 0; w<genderFiltered.length; w+=1){
					if(genderFiltered[w].weight<=75){
						weightFiltered.push(genderFiltered[w])
					}
				}
		
			}
			else{
				weightFiltered.push.apply(weightFiltered, genderFiltered)
	
			}

			if($scope.team.catagory === new String("veteran").valueOf()){
				for(var a = 0; a<weightFiltered.length; a+=1){
					if(weightFiltered[a].age >= 45){
						rowers.push(weightFiltered[a])
					}
				}
				
				return rowers
				
			}
			else if($scope.team.catagory === new String("pre-veteran").valueOf()){
				for(var p = 0; p<weightFiltered.length; p+=1){
					if(weightFiltered[p].age >= 35){
						rowers.push(weightFiltered[p])
					}
				}
				
				return rowers
				
			}
			else{
				rowers.push.apply(rowers, weightFiltered)

				return rowers
			}
		}
		
		$scope.addToTeam = function(team, member){
			var index = $scope.possibleMembers.indexOf(member)
			$scope.possibleMembers.splice(index, 1)
			var members = TeamsService.addMembers(team)
			members.$push(member.name)
			
		}
	//start add rower
		$scope.addTeam = function(){
			$scope.teams = TeamsService.addTeam();

			if($scope.team.gender==null){
	        	$scope.team.gender="male"
	        }
	        if($scope.team.catagory==null){
	        	$scope.team.catagory=='standard'
	        }
	        if($scope.team.size==null){
	        	$scope.team.size==4
	        }

	        var id= makeid();
	       
			$scope.teams.$push({
			   id: 	id,
			   name: $scope.team.name,
			   size: $scope.team.size,
			   gender: $scope.team.gender,
			   catagory: $scope.team.catagory
			}).then($location.path('/teams'))
		}


		function makeid()
		{
		    var text = "";
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}

		function c(x){
			console.log(x)
		}
}])