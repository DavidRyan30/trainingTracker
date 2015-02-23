myApp.controller('TeamsController', ['$location','$scope','TeamsService',
	function($location, $scope, TeamsService){
	// $scope.team_items= [2, 4, 8]

	$scope.team_items = { '2': 'Two', '4': 'Four','8': 'Eight'};
	$scope.team_catagories = ['standard', 'light weight', 'veteran', 'pre-veteran']
	var teamMembers ={}
//returns all rowers
	$scope.teams = TeamsService.getTeams();

	$scope.rowers = TeamsService.getRowerList();
//	console.log($scope.rowers)

	// $scope.addToTeam=function(rower){
	// 	teamMembers.push({"name": rower.regRower, "data": rower});
	// }

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
        if($scope.team.catagory==null){
        	$scope.team.catagory=='standard'
        }
       
		$scope.teams.$push({
		   name: $scope.team.name,
		   size: $scope.team.size,
		   gender: $scope.team.gender,
		   catagory: $scope.team.catagory
		}).then($location.path('/teams'))
	}
}])