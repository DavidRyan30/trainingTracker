myApp.controller('TeamsController', ['$location','$scope','TeamsService',
	function($location, $scope, TeamsService){

//returns all rowers
	$scope.teams = TeamsService.getTeams();

//start add rower
	$scope.addTeam= function(){
		$scope.teams = TeamsService.addTeam();
		$scope.teams.$push({
		   teamName: $scope.teamName,
		   teamSize: $scope.teamSize
		}).then($location.path('/teams'))
	}
}])