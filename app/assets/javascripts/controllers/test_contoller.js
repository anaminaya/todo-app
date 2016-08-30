(function(){
  'use strict';
  angular.module('app').controller("testController", function($scope){

    $scope.tasks = [
    {
      text: "Go food shopping",
      done: 2,
      priority: "high"
    },

    {
      text: "Call mom",
      done: 3,
      priority:" high"
     }
  ];
    //var addTask = function(){
      //console.log('$scope.newTask');
  //  };
    $scope.addTask = function() {
      if ($scope.newTask){
        var task = {
          text: $scope.newTask,
          done: false,
          priority: 4
        };
       $scope.tasks.push($scope.newTask)
     };
      $scope.newTask = "";
    };
    $scope.ifPositive = function(task){
      //return task.indexOf("stupid") === -1;
      return true;
    };
  });
})();
