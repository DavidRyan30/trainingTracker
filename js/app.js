
var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'appControllers']);
var appControllers = angular.module('appControllers', ['firebase'])


var FIREBASE_URL = "https://rowint-trainingtrack.firebaseio.com/"

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/teams',
            {
                controller: 'TeamsController',
                templateUrl: './views/teams.html'
            })
        .when('/addteam',
            {
                controller: 'TeamsController',
                templateUrl: './views/create_team.html'
            })
        .when('/rowers',
            {
                controller: 'RowersController',
                templateUrl: './views/rowers.html'
            })
        .when('/rowers/:rower_index',
                {
                    controller: 'RowersController',
                    templateUrl: './views/rower_edit.html'
                })
        .when('/home',
            {
                controller: 'HomeContentController',
                templateUrl: './views/welcome.html'
            })

        .when('/register',
            {
                controller: 'RowersController',
                templateUrl: './views/register.html'
            })       
        .otherwise({ redirectTo: '/home' });
})

// myApp.controller('Teams', function ($scope,SimpleFactory) {

//         $scope.teams = SimpleFactory.getTeams()
//         $scope.rowers = SimpleFactory.getRowers()
//         $scope.addTeam = function () {
//         SimpleFactory.addTeam($scope.newTeam)
//         $scope.newTeam = {}
//     }        
// })

// myApp.controller('TrainingSession',
//  function($scope, $location, $routeParams, SimpleFactory){
    
// })

// myApp.controller('RowerDetailController', 
//     function ($scope,$location,$routeParams,SimpleFactory) {
//         $scope.rower = {  
//             index : $routeParams.rower_index, 
//             detail : SimpleFactory.getRower($routeParams.rower_index)
//           }
//         $scope.updateRower = function () {
//              SimpleFactory.updateRower($scope.rower.index, 
//                                $scope.rower.detail )
//              $location.path('/rowers')
//         }
            
// })

// myApp.controller('IndividualRowers', function ($scope,$routeParams, $location, SimpleFactory) {
//         $scope.rowers = SimpleFactory.getRowers()


//         $scope.addRower = function () {
//         SimpleFactory.addRower($scope.newRower)
//         $scope.newRower = {}
//         $location.path('/rowers')
//     }
//         $scope.rowerNoInRange = function () {
//         return  $scope.rowerNo && $scope.rowerNo >=0 
//                         && $scope.rowerNo < $scope.rowers.length
//     }

//     $scope.deleteRower = function(){  

//             SimpleFactory.deleteRower($scope.rowerNo)
//             $scope.rowerNo = '';
//             $location.path('/rowers')
//     }
// })

// myApp.factory('SimpleFactory', function () {
//         var factory = {};
//         var ref = new Firebase(FIREBASE_URL + 'rowers');
        
//         // var rowers = [ 
//         //     {'name' : 'David Ryan','age' : 37,'weight' : 100, 'height': 1.7},
//         //     {'name' : 'John Finn','age' : 37,'weight' : 95, 'height': 2.2},
//         //     {'name' : 'Jody Waters', 'age' : 47, 'weight': 100, 'height' : 1.8},
//         //     {'name' : 'Paddy Kehoe', 'age' : 42, 'weight': 105, 'height' : 1.9}
//         // ] 

//         // var teams = [
//         //         {'name' : 'SSD4', 'size' : 4},
//         //         {'name' : 'Senior Men 8s', 'size' : 8},
//         //         {'name' : 'Junior Men 8s', 'size' : 8},
//         //         {'name' : 'Senior Men 4s', 'size' : 4, 'member' : 'dave'},
//         //     ]




//         factory.addTeam = function(team){
//             teams.push({name: team.name, size: team.size, member: team.member})
//         }

//         factory.getTeams = function(){
//             return teams;
//         }


//         factory.getRowers = function () {

//             ref.on("value", function(rowers) {
//             console.log("rowers"+rowers.val());
                
//               return rowers.val();
//          });
//             // return rowers;
//         }
//        factory.getRower = function (index) {
//             if (index >=0 && index < rowers.length ) {
//                return rowers[index]
//            }
//            return undefined
//         }


//         factory.addRower = function(rower) {
//             // var ref = new Firebase(FIREBASE_URL + 'rowers');
            
//              ref.$set({ name: rower.name, age: rower.age, 
//                       weight: rower.weight, height: rower.height });
//         }
        
//         factory.updateRower = function(index,rower) {
//              rowers[index].name = rower.name
//              rowers[index].age = rower.age
//              rowers[index].weight = rower.weight
//              rowers[index].height = rower.height
//         }

//         factory.deleteRower = function(index){
//             rowers.splice(index,1)

//         }

//         return factory;
//     })





myApp.controller('HomeContentController', function HomeContentController($scope){

});