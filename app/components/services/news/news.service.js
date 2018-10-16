(function(){
    'use strict';

    angular
        .module('news')
        .factory('newsService', newsService)

    newsService.$inject = ['$http'];

    function newsService($http) {
        var service = {
            getNews: getNews
        };

        return service;

        function getNews(countryName) {
            return $http.get('https://content.guardianapis.com/search?q=' + countryName + '&api-key=bfab3a0e-227f-4188-8bed-9b544b65025e&format=json&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all')
                .then(getNewsComplete)
                .catch(getNewsFailed);

                function getNewsComplete(response) {
                    return response.data;
                };

                function getNewsFailed(error) {
                    console.log('Error' + error);
                };
        }
    }
})();