(function () {
    'use strict';

    angular
        .module ('core')
        .directive ('newsItem', newsItem);

    newsItem.$inject = ['$window'];

    function newsItem($window) {
        // Usage:
        //     <newsItem></newsItem>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                item: '='
            },
            templateUrl: 'components/shared/directives/news-item/news-item.template.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();