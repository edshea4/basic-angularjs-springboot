(function () {
    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider
                .when("/feature", {
                    template: "<feature></feature>"
                })
                .when("/playerList", {
                    template: "<player-list></player-list>"
                })
                .when("/playerCreate", {
                    template: "<player-create></player-create>"
                })
                .when("/player/:id",{
                    template: "<player-view></player-view>"
                })
                .when("/player/:id/edit",{
                    template: "<player-edit></player-edit>"
                })
                .otherwise({
                    template: "<app-main></app-main>"
                });
        })
})();