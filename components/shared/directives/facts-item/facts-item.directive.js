(function () {
    'use strict';

    angular
        .module ('core')
        .directive ('factsItem', factsItem);

        factsItem.$inject = ['$window'];

    function factsItem($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();