app.controller('PersonalInfoCtrl', function($scope, FormService) {

  $scope.popup = {
    opened: false
  };

  formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = formats[2];

  $scope.openPopup = function() {
    $scope.popup.opened = true;
  };

  $scope.personalInfoFormSubmit = function(user) {
    FormService.markedCompleteStep();
    FormService.setPersonalInfoData(FormService.mergeUserData(user));
  };
    
}); 