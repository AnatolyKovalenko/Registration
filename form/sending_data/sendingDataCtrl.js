app.controller('SendingDataCtrl', function($scope,  FormService) {
  
  var userData = FormService.getUserData();
  $scope.user = userData;

  $scope.sendInfo = function(){ 
    FormService.markedCompleteStep();
    alert("Awesome, your data is sent to the server.");
  };
});