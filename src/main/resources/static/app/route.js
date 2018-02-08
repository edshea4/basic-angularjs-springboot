(function () {
    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider
                .when("/feature", {
                    template: "<feature></feature>"
                })
                .otherwise({
                    template: "<app-main></app-main>"
                });
        })
})();