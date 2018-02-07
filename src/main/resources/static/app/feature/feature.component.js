(function() {
    angular.module('app')
        .component('feature',{
            templateUrl: "app/feature/feature.tpl.html",
            controllerAs: "vm",
            controller: function () {
                this.name = "feature";
            }
        })
})();