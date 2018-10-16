(function(){
    'use strict';

    angular
        .module('currency')
        .factory('currencyService', currencyService)

    currencyService.$inject = ['$http'];

    function currencyService($http) {
        var service = {
            getCurrencyRate: getCurrencyRate
        };

        return service;

        function getCurrencyRate(currency) {
            return $http({
                url:'https://sdw-wsrest.ecb.europa.eu/service/data/EXR/M.' + currency + '.EUR.SP00.A?detail=dataonly',
                method: 'GET',
                headers: {
                    Accept: 'application/vnd.sdmx.data+json;version=1.0.0-wd'
                }
            })
                .then(getCurrencyRateComplete)
                .catch(getCurrencyRateFailed);

                function getCurrencyRateComplete(response) {
                    return response.data;
                };

                function getCurrencyRateFailed(error) {
                    console.log(currency + ' is not available.')
                };
        };
    }
})();