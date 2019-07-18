(function () {
    'use strict';

    angular
        .module ('core')
        .directive ('loader', loader);

    loader.$inject = ['$window', '$rootScope'];

    function loader($window, $rootScope) {
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
            element.addClass('ng-hide');

            var unregister = $rootScope.$on('$stateChangeStart', function() {
              element.removeClass('ng-hide');
            });
      
            scope.$on('$destroy', unregister);
        }
    }

})();