(function() {
    angular.module('app')
        .component('appNav',{
            templateUrl: "app/app-nav/app-nav.tpl.html",
            controllerAs: "vm",
            controller: function ($location) {
                this.navigate = function(path) {
                    $location.path(path);
                };
            }
        })
})();