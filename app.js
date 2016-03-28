var app = angular.module('app', ['ngAnimate','ui.bootstrap', 'ui.router']);

app.run(function($rootScope, $state) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    if(!toState.data.allowed) {
      event.preventDefault();
      $state.go(fromState.name || "form.authorization");
    }
  });
});

