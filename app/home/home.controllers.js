angular.module('app')
    .controller('HomeCtrl',function($scope, $window){
        $scope.message='this is home';
        $scope.inputModel = '';
        $scope.things_todo = [];
      $scope.get_todos = function(){
        // Get todo list that is stored on the window.localStorage
        var string = $window.localStorage.things_todo;
        $scope.things_todo = string.split(',');
      };
      $scope.push_todo = function(item){
        // This is where i update the window.localStorage
        $scope.things_todo.push(item); // only the scope is saved here. Here the "item" is svaed in $scope.things_todo. So reference when calling.
        $scope.inputModel = ''; // Reset here
        $scope.keep_todos(); // save to window.localStorage
      };

      $scope.keep_todos = function(){
        //this is what saves the information to localStorage
        $window.localStorage.things_todo = $scope.things_todo;
      };
      $scope.delete = function(){
        // this is where we will write the delete function for our todo list
        $scope.things_todo[index] = $scope.things_todo.splice(index, 1);
        $scope.keep_todos();
      };
      $scope.edit = function(){
        // this is hwere we will write the edit function for our todo list
        $scope.things_todo[index] = $scope.inputModel;
        $scope.keep_todos();
      };
      $scope.read = function(input){
        //this is where we will write the read function
        $scope.inputModel = input;

      };


});
