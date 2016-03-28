app
  .controller('ContactInfoCtrl', function($scope, FormService) {
    
    $scope.contactInfoFormSubmit = function(user) {
      FormService.markedCompleteStep();
      FormService.setContactInfoData(FormService.mergeUserData(user));
    };
  })
  .directive('phonenumberDirective', function($filter) {
    return {
      link: link,
      restrict: 'E',
      scope: {
        phonenumberModel: '=model'
      },
      template: '<input  class="form-control" ng-model="inputValue" type="tel" placeholder="Enter you phone number:(###) ###-##-##" ng-required="true">'
    };

    function link(scope, element, attributes) {

      scope.inputValue = scope.phonenumberModel;

      scope.$watch('inputValue', function(value) {
  
        value = String(value);
        var number = value.replace(/[^0-9]+/g, '');
        scope.phonenumberModel = number;
        scope.inputValue = $filter('PhoneNumberFilter')(number);

      });
    }
  });

  