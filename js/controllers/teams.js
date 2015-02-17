myApp.controller('TeamsController', ['$location','$scope','TeamsService',
	function($location, $scope, TeamsService){
	$scope.team_items= [1, 2, 4, 8]
	var teamMembers =[]
//returns all rowers
	$scope.teams = TeamsService.getTeams();

	$scope.rowers = TeamsService.getRowerList();
//	console.log($scope.rowers)

	$scope.addToTeam=function(rower){
		teamMembers.push(rower);
	}
//start add rower
	$scope.addTeam= function(){
		$scope.teams = TeamsService.addTeam();
		$scope.teams.$push({
		   name: $scope.team.name,
		   size: $scope.team.size,
		   members: teamMembers
		}).then($location.path('/teams'))
	}


}])