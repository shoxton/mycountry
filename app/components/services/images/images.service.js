(function(){
    'use strict';

    angular
        .module('images')
        .factory('imagesService', imagesService)

    imagesService.$inject = ['$http'];

    function imagesService($http) {
        var service = {
            getImages: getImages
        };

        return service;

        function getImages(countryName) {
            return $http({
                method: 'GET',
                url: 'https://api.unsplash.com/search/photos?page=1&query=' + countryName + '',
                headers: {
                    Authorization: 'Bearer 0d7278a532b44db229d6b21052087bbbbd54cc4e30bb176198009b20fe5270df'
                }
            })
                .then(getImagesComplete)
                .catch(getImagesFailed);

                function getImagesComplete(response) {
                    return response.data;
                };

                function getImagesFailed(error) {
                    console.log('Error' + error);
                };
        }

        // function authorizeImages() {
        //     return $http({
        //         method: 'POST',
        //         url: 'https://unsplash.com/oauth/token?client_id=c6305cda88d67b5992fdacd7f3ff3c4d2fec582a0222cc7b95d8b5078416399a&client_secret=88b98fb0ee6d7d8ed2f442209a4f73e9699b0b3e4ea272d08280c1ad032166b1&redirect_uri=https://localhost:8000/&code=5415de30a5ee901df9c3bd7f0b73e5a1550e686bde5d91648e360f2503b34822&grant_type=authorization_code'
        //     })
        //         .then(function(response) {
        //             return response.data;
        //         })
        // }
    }
})();