(function(){
    'use strict';

    angular
        .module('world-bank')
        .factory('worldBankService', worldBankService)

    worldBankService.$inject = ['$http', '$q'];

    function worldBankService($http, $q) {

        var service = {
            getArea: getArea,
            getPop: getPop,
            getCurrency: getCurrency
        };

        return service;

        function getArea(country) {

            var areaIndicators = [
                {indicatorId: "AG.LND.TOTL.K2", name: "Total (km²)"},
                {indicatorId: "AG.LND.TOTL.UR.ZS", name: "Urban (%)"},
                {indicatorId: "AG.LND.TOTL.RU.ZS", name: "Rural (%)"},
                {indicatorId: "AG.LND.FRST.ZS", name: "Forest (%)"},
                {indicatorId: "AG.LND.TOTL.UR.K2", name: "Urban (km²)"},
                {indicatorId: "AG.LND.TOTL.RU.K2", name: "Rural (km²)"},
                {indicatorId: "AG.LND.FRST.K2", name: "Forest (km²)"}
            ];

            var promises = [];

            angular.forEach(areaIndicators, function(indicator) {
                promises.push(getIndicators(country, indicator.indicatorId, indicator.name));
            });

            return $q.all(promises);
        };

        function getPop(country) {

            var populationIndicators = [
                {indicatorId: "SP.POP.TOTL", name: "Total"},
                {indicatorId: "SP.POP.GROW", name: "Growth"},
                {indicatorId: "SP.POP.TOTL.FE.ZS", name: "Female (%)"},
                {indicatorId: "SP.POP.TOTL.MA.ZS", name: "Male (%)"},
                {indicatorId: "SP.DYN.LE00.FE.IN", name: "Life Expectancy, Female (years)"},
                {indicatorId: "SP.DYN.LE00.MA.IN", name: "Life Expectancy, Male (years)"},
                {indicatorId: "SP.DYN.AMRT.FE", name: "Mortality, Female (1/1000)"},
                {indicatorId: "SP.DYN.AMRT.MA", name: "Mortality, Male (1/1000)"}
            ];

            var promises = [];

            angular.forEach(populationIndicators, function(indicator) {
                promises.push(getIndicators(country, indicator.indicatorId, indicator.name));
            });

            return $q.all(promises);
        }

        function getCurrency(country) {

            var currencyIndicators = [
                {indicatorId: "PA.NUS.ATLS", name: "DEC alternative conversion factor (LCU per US$)"},
                {indicatorId: "PA.NUS.FCRF", name: "Official exchange rate (LCU per US$, period average)"},
                {indicatorId: "PA.NUS.PPP", name: "PPP conversion factor, GDP (LCU per international $)"},
                {indicatorId: "PA.NUS.PPP.05", name: "2005 PPP conversion factor, GDP (LCU per international $)"},
                {indicatorId: "PA.NUS.PPPC.RF", name: "Price level ratio of PPP conversion factor (GDP) to market exchange rate"},
                {indicatorId: "PA.NUS.PRVT.PP", name: "PPP conversion factor, private consumption (LCU per international $)"},
                {indicatorId: "PA.NUS.PRVT.PP.05", name: "2005 PPP conversion factor, private consumption (LCU per international $)"}
            ];

            var promises = [];

            angular.forEach(currencyIndicators, function(indicator) {
                promises.push(getIndicators(country, indicator.indicatorId, indicator.name));
            });

            return $q.all(promises);

        }

        function getIndicators(country, indicatorId, name) {
            return $http.get("https://api.worldbank.org/v2/countries/" + country + "/indicators/" + indicatorId + "?MRV=5&Gapfill=Y&format=json")
            .then(getIndicatorsComplete)
            .catch(getIndicatorsFailed);

            function getIndicatorsComplete(response) {
                return {
                    "name": name,
                    "response": response.data
                }
            };

            function getIndicatorsFailed(error) {
                console.log("Error" + error)
            };
        };
        
    }
})();