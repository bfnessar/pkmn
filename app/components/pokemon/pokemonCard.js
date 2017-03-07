(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('pokemonCard', pokemonCard);

    /* @ngInject */
    function pokemonCard() {
        var directive = {
            restrict: 'EA',
            templateUrl: '/components/pokemon/pokemonCard.html',
            scope: {
              model: '=',
            },
        };

        return directive;

    }

})();
