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
            // link: linkFunc,
            // controller:
            //   // see https://docs.angularjs.org/guide/directive#creating-directives-that-communicate
            //   ['$scope',
            //     function basicCardCtrl($scope) {
            //       var panes = $scope.panes = [];
            //
            //       $scope.select = function(pane) {
            //         angular.forEach(panes, function(pane) {
            //           pane.selected = false;
            //         });
            //         pane.selected = true;
            //       };
            //
            //       this.addPane = function(pane) {
            //         if (panes.length === 0) {
            //           $scope.select(pane);
            //         }
            //         panes.push(pane);
            //       };
            //   }],
            // controllerAs: 'vm',
            // bindToController: true
        };

        return directive;

        // function linkFunc(scope, el, attr, ctrl) {
        //
        // }
    }


    /*  I didn't know you could do this. Keeping it here for later reference,
        but not doing anything with it right now
    */
    // basicCardCtrl.$inject = ['$http'];
    //
    // /* @ngInject */
    // function basicCardCtrl($http) {
    //     var vm = this;
    //
    //     activate();
    //
    //     function activate() {
    //
    //     }
    // }
})();
