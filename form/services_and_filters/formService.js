app.factory('FormService', function($state) {
  var service = {};
  
  service.markedCompleteStep = function() {
    var activeStep = document.querySelector(".active");
    angular.element(activeStep).removeClass('active')
      .children().addClass('visited')
        .parent().next().addClass('active');
  };

  service.setAuthData = function(userData) {
    localStorage.setItem('isUser', JSON.stringify(userData));
    $state.get('form.personal_info').data.allowed = true;
    $state.go('form.personal_info');
  };

  service.setPersonalInfoData = function(userData) {
  	localStorage.setItem('isUser', JSON.stringify(userData));
    $state.get('form.contact_info').data.allowed = true;
  	$state.go('form.contact_info');
  };

  service.setContactInfoData = function(userData) {
    localStorage.setItem('isUser', JSON.stringify(userData));
    $state.get('form.sending_data').data.allowed = true;
    $state.go('form.sending_data');
  };

  service.getUserData = function() {
    var data = JSON.parse(localStorage.getItem('isUser'));
    return data;
  };

  service.mergeUserData = function(userData) {
    var oldData = JSON.parse(localStorage.getItem('isUser')),
        currentData = userData;
        newData = angular.merge(oldData, currentData);
    return newData;
  };

  return service;
});