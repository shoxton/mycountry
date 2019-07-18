(function () {
    'use strict';

    angular.module('test-app', [
        // Angular modules
        'ngRoute',
        'ngAnimate',
      
        // Custom modules
        'country-list',
        'country-detail',
        'core',

        // 3rd Party Modules
        'ui.router',
        'angular-loading-bar'

    ]);
})();
