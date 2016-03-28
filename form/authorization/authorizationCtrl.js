app.controller('AuthorizationCtrl', function($scope, FormService) {

  $scope.authFormSubmit = function(user) {
    FormService.markedCompleteStep();
    FormService.setAuthData(user);
  };

});