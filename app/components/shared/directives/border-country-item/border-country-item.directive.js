(function () {
    'use strict';

    angular
        .module ('core')
        .directive ('borderCountryItem', borderCountryItem);

    borderCountryItem.$inject = ['$window'];

    function borderCountryItem($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                border: '='
            },
            templateUrl: 'components/shared/directives/border-country-item/border-country-item.template.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();