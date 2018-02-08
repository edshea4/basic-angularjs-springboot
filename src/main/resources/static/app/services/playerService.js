(function () {
    angular.module('app')
        .service('playerService', function ($http, $q) {
            var self = this;
            this.url = 'rest/player';

            this.getPlayers = function () {
                var response = $q.defer();
                $http.get(self.url).then(function (res) {
                    response.resolve(res.data)
                });
                return response.promise;
            };
            this.getPlayer = function (playerKey) {
                var response = $q.defer();
                $http.get(self.url+"/"+playerKey).then(function (res) {
                    response.resolve(res.data)
                });
                return response.promise;
            };
            this.savePlayer = function ( player ) {
                var response = $q.defer();
                $http.post(self.url , player).then(function (res) {
                    response.resolve(res.data)
                });
                return response.promise;
            };
        })
})();