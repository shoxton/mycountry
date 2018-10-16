(function(){
    'use strict';

    angular
        .module('country-data')
        .factory('countryDataService', countryDataService)

    countryDataService.$inject = ['$http'];

    function countryDataService($http) {

        var service = {
            getCountries: getCountries,
            getCountry: getCountry,
            getCountryBorders
        };

        return service;

        function getCountries() {
            return $http.get('https://restcountries.eu/rest/v2/all?fields=name;code;flag;demonym;alpha3Code')
                .then(getCountriesComplete)
                .catch(getCountriesFailed);

                function getCountriesComplete(response) {
                    return response.data;
                };

                function getCountriesFailed(error) {
                    console.log('Error' + error);
                };
            };

        function getCountry(endPoint) {
            return $http.get('https://restcountries.eu/rest/v2/alpha/' + endPoint)
                .then(getCountryComplete)
                .catch(getCountryFailed);

                function getCountryComplete(response) {
                    return response.data;
                };

                function getCountryFailed(error) {
                    console.log('Error' + error)
                };
            }
        
        function getCountryBorders(endPoint) {
            return $http.get('https://restcountries.eu/rest/v2/alpha?codes=' + endPoint)
                .then(getCountryBordersComplete)
                .catch(getCountryBordersFailed);

                function getCountryBordersComplete(response) {
                    return response.data;
                };

                function getCountryBordersFailed(error) {
                    console.log('Error' + error);
                };
        }

        };
})();