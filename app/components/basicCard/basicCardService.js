(function() {
    'use strict';

    angular
        .module('myApp')
        .service('basicCardService', basicCardService);

    basicCardService.$inject = ['$http'];

    function basicCardService($http) {
      var BasicCardService = {
        'teststring': 'basiccardserviceteststring'


      }

      return BasicCardService;

    }
})();
