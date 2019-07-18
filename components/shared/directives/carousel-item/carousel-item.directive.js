(function () {
    'use strict';

    angular
        .module ('core')
        .directive ('carouselItem', carouselItem);

    carouselItem.$inject = ['$window'];

    function carouselItem($window) {
        // Usage:
        //     <carouselItem></carouselItem>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                image: '='
            },
            templateUrl: 'components/shared/directives/carousel-item/carousel-item.template.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();