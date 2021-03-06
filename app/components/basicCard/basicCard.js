(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('basicCard', basicCard);

    /* @ngInject */
    function basicCard() {
        var directive = {
            restrict: 'EA',
            templateUrl: '/components/basicCard/basicCard.html',
            scope: {
              model: '=',
            },
        };

        return directive;

    }

})();
