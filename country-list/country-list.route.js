(function(){
    'use strict';

    angular
        .module('country-list')
        .config(config)

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        var countries = {
            name: 'countries',
            url: '/countries',
            templateUrl: 'country-list/country-list.template.html',
            controller: 'CountryListController',
            controllerAs: 'vm'
        }

        $stateProvider.state(countries);

    }

}());