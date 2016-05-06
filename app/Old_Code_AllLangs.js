//Here was my attempt at count up buttons, Possibly broken due to NG-Repeat

$scope.count1 =0;
  $scope.myFunc = function() {
    $scope.count1++;
  };
  //Here is my attempt to save the Counter for the Green Thumbs
$scope.get_count1 = function(){
  // Get count1 that is stored on the window.localStorage
  var string = $window.localStorage.get_count1;
  $scope.get_count1 = string.split(',');
};
$scope.push_count1 = function(item){
  // This is where i update the window.localStorage
  $scope.get_count1.push(item); // only the scope is saved here. Here the "item" is svaed in $scope.things_todo. So reference when calling.
  $scope.inputModel = ''; // Reset here
  $scope.keep_count1(); // save to window.localStorage
};

$scope.keep_count1 = function(){
  //this is what saves the information to localStorage
  $window.localStorage.get_count1 = $scope.count1;
};

// Here is the ThumbsUp Counter for the Thumbs Up on the movie. // Not working on the NG - repeat
$scope.count2 =0;
$scope.myFunc = function() {
  $scope.count2++;
};

//END OF MY CURRENT CODE
//
//
// START OF A NEW SECTION OF CODE

// THE FOLLOW IS JUST TESTING MATERIAL FOR TESTING PURPOSES//
        $scope.title = "This is the Title.";
        $scope.message='this is about';
        $scope.header1 = "this is header 1";
        $scope.header2 = 'this is header 2';
        $scope.header3 = 'this is header 3';
        $scope.list = [
          {name: "Single Blue"},
          {name: "Red Weapons"},
          {name: "Green Weapons & Stab Tips"},
          {name: "Archery"},
          {name: "Shields"}
        ];

// END OF MY CURRENT CODE
//
//
// START OF A NEW SECTION OF CODE
