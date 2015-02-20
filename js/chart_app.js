var chartApp = angular.module('chartApp', ["highcharts-ng"]);

chartApp.controller('ChartController', ['$location','$scope', '$controller','$rootScope','ChartAppService',
                                       	function($location, $scope, $controller, $rootScope, ChartAppService) {



//initialising an instance of status to gain access to the current user
     var statusController = $scope.$new();
     $controller('StatusController', {$scope : statusController});
     var user = statusController.getCurrentRower();
////////////////////////////
      $scope.sessions = ChartAppService.getTrainingSessions(user.regRower);
      console.log($scope.sessions);
      $scope.chartSeries =[];
      $scope.chartXAxis = []
      $scope.chartXAxisName = ""
        

     $scope.timeChart = function(){
      $('#t').attr("disabled",true);
      var chartData ={};
      var timeData = []
          $scope.sessions.forEach(function(session) {
            timeData.push(session.time)
            $scope.chartXAxis.push(session.day)
    });
       chartData = {"color": "#f00","name": "Time over 2000m", "data": timeData}; 
       $scope.chartXAxisName = "Training Days"
        $scope.chartSeries.push(chartData);
    }  

    $scope.rateChart = function(){
      $('#r').attr("disabled",true);
      var rateData = []
      var chartData ={}
          $scope.sessions.forEach(function(session) {
            rateData.push(session.rate)
            $scope.chartXAxis.push(session.day)
    });
       chartData = {"color": "#00f", "name": "Stroke Rate", "data": rateData}; 
       $scope.chartXAxisName = "Training Days"
        $scope.chartSeries.push(chartData);
    } 

    $scope.personalBest = function(){

    }                

  // var chartRowingData = chart();
  $scope.chartTypes = [
    {"id": "line", "title": "Line"},
    {"id": "spline", "title": "Smooth line"},
    {"id": "area", "title": "Area"},
    {"id": "areaspline", "title": "Smooth area"},
    {"id": "column", "title": "Column"},
    {"id": "bar", "title": "Bar"},
    {"id": "pie", "title": "Pie"},
    {"id": "scatter", "title": "Scatter"}
  ];

  $scope.dashStyles = [
    {"id": "Solid", "title": "Solid"},
    {"id": "ShortDash", "title": "ShortDash"},
    {"id": "ShortDot", "title": "ShortDot"},
    {"id": "ShortDashDot", "title": "ShortDashDot"},
    {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
    {"id": "Dot", "title": "Dot"},
    {"id": "Dash", "title": "Dash"},
    {"id": "LongDash", "title": "LongDash"},
    {"id": "DashDot", "title": "DashDot"},
    {"id": "LongDashDot", "title": "LongDashDot"},
    {"id": "LongDashDotDot", "title": "LongDashDotDot"}
  ];

  // $scope.chartSeries = [
  //   chartData
  //   // {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true}
  //   // {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column"},
  //   // {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column"}
  // ];

  $scope.chartStack = [
    {"id": '', "title": "No"},
    {"id": "normal", "title": "Normal"},
    {"id": "percent", "title": "Percent"}
  ];


  $scope.chartConfig = {
    backgroundColor: null,
    options: {
      chart: {
        type: 'spline'
      },
      plotOptions: {
        series: {
          stacking: ''
        }
      }
    },
     xAxis: {
        title: {
            text: $scope.chartXAxisName
        },
            
            categories: $scope.chartXAxis
        },
        yAxis: {
            title: {
                text: 'Time in Minutes'
            }
        },
        series: $scope.chartSeries,
    title: {
      text: 'Rower Stats'
    },
    credits: {
      enabled: true
    },
    loading: false,
    size: {}
  }
  

  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };
}]);