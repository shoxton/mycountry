(function(){
    'use strict';

    angular
        .module('country-list')
        .controller('CountryListController', CountryListController)

    CountryListController.$inject = ['$location', 'countryDataService'];

    function CountryListController($location, countryDataService) {
        /* jshint validthis:true */
        var vm = this;
        vm.countries = [];
        vm.query = "";

        activate();

        function activate() {
            return getCountries().then(function(response) {
                console.log('Success!');
            });
        };

        function getCountries() {
            return countryDataService.getCountries()
                .then(function(data) {
                    vm.countries = data;
                    return vm.countries;
                });
        }
    }
})();