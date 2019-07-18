(function(){
    'use strict';

    angular
        .module('test-app')
        .config(config)

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        var home = {
            name: 'home',
            url: '/',
            templateUrl: 'components/layout/home.html'
        }

        $stateProvider.state(home);
    }

}());