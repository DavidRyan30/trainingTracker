var myApp = angular.module('myApp', ['ngRoute']);
var Firebase = require("firebase");
var firebaseReference = new Firebase("https://rowint-trainingtrack.firebaseio.com/")

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/teams',
            {
                controller: 'Teams', 
                templateUrl: './views/teams.html'
            })
        .when('/addteam',
            {
                controller: 'Teams', 
                templateUrl: './views/create_team.html'
            })
        .when('/rowers',
            {
                controller: 'IndividualRowers',
                templateUrl: './views/rowers.html'
            })
        .when('/rowers/:rower_index',
                {
                    controller: 'RowerDetailController',
                    templateUrl: './views/rower_edit.html'
                })
        .when('/home',
            {
                controller: 'HomeContentController',
                templateUrl: './views/welcome.html'
            })

        .when('/register',
            {
                controller: 'IndividualRowers',
                templateUrl: './views/register.html'
            })       
        .otherwise({ redirectTo: '/home' });
})

myApp.controller('Teams', function ($scope,SimpleFactory) {

        $scope.teams = SimpleFactory.getTeams()
        $scope.rowers = SimpleFactory.getRowers()
        $scope.addTeam = function () {
        SimpleFactory.addTeam($scope.newTeam)
        $scope.newTeam = {}
    }        
})

myApp.controller('TrainingSession',
 function($scope, $location, $routeParams, SimpleFactory){
    
})

myApp.controller('RowerDetailController', 
    function ($scope,$location,$routeParams,SimpleFactory) {
        $scope.rower = {  
            index : $routeParams.rower_index, 
            detail : SimpleFactory.getRower($routeParams.rower_index)
          }
        $scope.updateRower = function () {
             SimpleFactory.updateRower($scope.rower.index, 
                               $scope.rower.detail )
             $location.path('/rowers')
        }
            
})

myApp.controller('IndividualRowers', function ($scope,$routeParams, $location, SimpleFactory) {
        $scope.rowers = SimpleFactory.getRowers()


        $scope.addRower = function () {
        SimpleFactory.addRower($scope.newRower)
        $scope.newRower = {}
        $location.path('/rowers')
    }
        $scope.rowerNoInRange = function () {
        return  $scope.rowerNo && $scope.rowerNo >=0 
                        && $scope.rowerNo < $scope.rowers.length
    }

    $scope.deleteRower = function(){  

            SimpleFactory.deleteRower($scope.rowerNo)
            $scope.rowerNo = '';
            $location.path('/rowers')
    }
})

myApp.factory('SimpleFactory', function () {
        var factory = {};
        var rowers = [ 
            {'name' : 'David Ryan','age' : 37,'weight' : 100, 'height': 1.7},
            {'name' : 'John Finn','age' : 37,'weight' : 95, 'height': 2.2},
            {'name' : 'Jody Waters', 'age' : 47, 'weight': 100, 'height' : 1.8},
            {'name' : 'Paddy Kehoe', 'age' : 42, 'weight': 105, 'height' : 1.9}
        ] 

        var teams = [
                {'name' : 'SSD4', 'size' : 4},
                {'name' : 'Senior Men 8s', 'size' : 8},
                {'name' : 'Junior Men 8s', 'size' : 8},
                {'name' : 'Senior Men 4s', 'size' : 4, 'member' : 'dave'},
            ]




        factory.addTeam = function(team){
            teams.push({name: team.name, size: team.size, member: team.member})
        }

        factory.getTeams = function(){
            return teams;
        }


        factory.getRowers = function () {
            return rowers;
        }
       factory.getRower = function (index) {
            if (index >=0 && index < rowers.length ) {
               return rowers[index]
           }
           return undefined
        }


        factory.addRower = function(rower) {
             rowers.push({ name: rower.name, age: rower.age, 
                      weight: rower.weight, height: rower.height })
        }
        factory.updateRower = function(index,rower) {
             rowers[index].name = rower.name
             rowers[index].age = rower.age
             rowers[index].weight = rower.weight
             rowers[index].height = rower.height
        }

        factory.deleteRower = function(index){
            rowers.splice(index,1)

        }

        return factory;
    })





myApp.controller('HomeContentController', function HomeContentController($scope){

});