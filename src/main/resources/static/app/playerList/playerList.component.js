(function() {
    angular.module('app')
        .component('playerList',{
            templateUrl: "app/playerList/playerList.tpl.html",
            controllerAs: "vm",
            controller: function ($location ,playerService) {

                var self = this;

                this.playerList = [];

                playerService.getPlayers().then(function (data) {
                    self.playerList = data;
                })

                this.buttonToCreate=function()
                {
                    $location.path("/playerCreate");
                }
                this.viewPlayer=function(playerKey)
                {
                     $location.path("/player/"+playerKey);
                }
            }
        })
})();