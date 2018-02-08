(function() {
    angular.module('app')
        .component('feature',{
            templateUrl: "app/feature/feature.tpl.html",
            controllerAs: "vm",
            controller: function (helloService) {
                var self = this;

                this.name = "feature";
                this.serviceResponse = null;

                helloService.getHello().then(function (data) {
                    self.serviceResponse = data.hello;
                });

                var fooFunction = function(callback, arg){
                    callback(arg);
                };

                var callbackFunction = function(argument){
                    console.log(argument)
                };

                fooFunction(callbackFunction, "Hello");
            }
        })
})();