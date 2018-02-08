(function () {
    angular.module('app')
        .service('helloService', function ($http, $q) {
            var self = this;
            this.url = 'rest/hello';

            this.getHello = function () {
                var response = $q.defer();
                $http.get(self.url).then(function (res) {
                    response.resolve(res.data)
                });
                return response.promise;
            }
        })
})();