
var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'appControllers']);
var appControllers = angular.module('appControllers', ['firebase'])

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
                templateUrl: './views/rower_reg.html'
            })
        .when('trainingsessionmanager',
            {
                controller: 'TrainingSessionService'
                templateUrl: './views/trainingsessionmanager'
            }
        )
        .otherwise({ redirectTo: '/home' });
})



myApp.controller('HomeContentController', function HomeContentController($scope){

});