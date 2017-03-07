'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [
  '$scope', 'basicCardService', 'pokemonCardService', 'pokeapiFactory',
  function($scope, basicCardService, pokemonCardService, pokeapiFactory) {
    var vm = this;
    vm.card1 = angular.copy(basicCardService);
    vm.pokemoncard1 = angular.copy(pokemonCardService);



}]);
