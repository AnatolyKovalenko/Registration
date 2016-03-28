app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .otherwise('/form/authorization');

  $stateProvider
    .state('form', {
      url: '/form',
      templateUrl: 'form/formView.html',
      abstract: true
    })
    .state('form.authorization', {
      url: '/authorization',
      templateUrl: 'form/authorization/authorizationView.html',
      controller: 'AuthorizationCtrl',
      data: {
        allowed: true
      }
    })
    .state('form.personal_info', {
      url: '/personal_info',
      templateUrl: 'form/personal_info/personalInfoView.html',
      controller: 'PersonalInfoCtrl',
      data: {
       allowed: false
      }
    })
    .state('form.contact_info', {
      url: '/contact_info',
      templateUrl: 'form/contact_info/contactInfoView.html',
      controller: 'ContactInfoCtrl',
      data: {
        allowed: false
      }
    })
    .state('form.sending_data', {
      url: '/sending_data',
      templateUrl: 'form/sending_data/sendingDataView.html',
      controller: 'SendingDataCtrl',
      data: {
        allowed: false
      }
    });
});