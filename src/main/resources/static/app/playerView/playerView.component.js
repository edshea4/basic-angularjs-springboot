(function(){
    angular.module('app')
        .component('playerView',{
            templateUrl: "app/playerView/playerView.tpl.html",
            controllerAs: "vm",
            controller: function ($routeParams, playerService) {

                var self = this;

                this.playerKey=$routeParams.id;

                this.player={};

                playerService.getPlayer(this.playerKey)
                    .then(function(playerdata) {
                        self.player = playerdata;
                    })

            }
        })

})();