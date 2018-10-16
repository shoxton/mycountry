(function () {
    'use strict';

    angular
        .module ('core')
        .directive ('countryListItem', countryListItem);

        countryListItem.$inject = ['$window'];

    function countryListItem($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                country: '='
            },
            templateUrl: 'components/shared/directives/country-list-item/country-list-item.template.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();