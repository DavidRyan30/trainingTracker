

var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'appControllers', 'chartApp']).constant('FIREBASE_URL', 'https://rowint-trainingtrack.firebaseio.com/');
var appControllers = angular.module('appControllers', ['firebase'])


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/login',
            {
                controller: 'AuthController',
                templateUrl: './views/login.html'
            })
        .when('/session_report',
            {
                controller: 'ChartController',
                templateUrl: './views/sessions_report.html'
            })
         .when('/register',
                    {
                        controller: 'AuthController',
                        templateUrl: './views/rower_reg.html'
                    })
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
        .when('/sessions',
            {
                controller: 'TrainingSessionController',
                templateUrl: './views/sessions.html'
            })
        .otherwise({ redirectTo: '/login' });
})



myApp.controller('HomeContentController', function HomeContentController($scope){

});