(function(){
    'use strict';

    angular
        .module('country-detail')
        .config(config)

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        var countryDetail = {
            name: 'countryDetail',
            url: '/:countryCode/details',
            templateUrl: 'country-detail/country-detail.template.html',
            controller: 'CountryDetailController',
            controllerAs: 'vm'
        };

        $stateProvider.state(countryDetail);

    }

}());