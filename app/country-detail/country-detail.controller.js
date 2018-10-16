(function(){
    'use strict';

    angular
        .module('country-detail')
        .controller('CountryDetailController', CountryDetailController)

    CountryDetailController.$inject = ['$location', '$window', '$http','$stateParams', 'countryDataService', 'mapsService', 'newsService', 'imagesService', 'worldBankService'];

    function CountryDetailController($location, $window, $http, $stateParams, countryDataService, mapsService, newsService, imagesService, worldBankService) {
        /* jshint validthis:true */
        var vm = this;
        vm.countryCode = $stateParams.countryCode;
        vm.country = [];
        vm.borders = [];
        vm.news = [];
        vm.images = [];
        vm.bankData = {};

        $('.item-1').click(function(){
            $(this).toggleClass('expanded');
          });

        activate();

        function activate() {
            return getCountry().then(function(response) {
                getCountryBorders();
                getNews();
                getImages();
                setMap();
                getArea();
                getPop();
                getCurrency();

                // vm.maxCurrency = Math.max.apply(Math, myArray.map(function(o){return o[0];}))

            });
        };

        function getCountry() {
            return countryDataService.getCountry(vm.countryCode)
                .then(function(data) {
                    vm.country = data;
                    return vm.country;
                });
        };

        function getCountryBorders() {
            return countryDataService.getCountryBorders(vm.country.borders.join(';'))
                .then(function(data) {
                    vm.borders = data;
                    return vm.borders;
                });
        };

        function setMap() {
            return mapsService.initMap(vm.country.latlng[0], vm.country.latlng[1])
        };

        function getNews() {
            return newsService.getNews(vm.country.name)
                .then(function(data) {
                    vm.news = data.response.results;
                    return vm.news;
                });
        };

        function getImages() {
            return imagesService.getImages(vm.country.name)
                .then(function(data) {
                    vm.images = data.results;
                    return vm.images;
                })
        };

        function getArea() {
            return worldBankService.getArea(vm.countryCode)
            .then(function(data) {
                vm.bankData.area = data;
                console.log(vm.bankData.area)
            });
        };

        function getPop() {
            return worldBankService.getPop(vm.countryCode)
            .then(function(data) {
                vm.bankData.population = data;
                console.log(vm.bankData.population)
            });
        };

        function getCurrency() {
            return worldBankService.getCurrency(vm.countryCode)
            .then(function(data) {
                vm.bankData.currency = data;
                console.log(vm.bankData.currency)
            });
        };
    }
})();