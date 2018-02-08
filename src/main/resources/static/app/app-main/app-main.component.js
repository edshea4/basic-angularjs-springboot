(function() {
    angular.module('app')
        .component('appMain',{
            templateUrl: "app/app-main/app-main.tpl.html",
            controllerAs: "vm",
            controller: function () {
                this.name = "Bob";
            }
        })
})();