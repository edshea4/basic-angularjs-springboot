(function() {
    angular.module('app')
        .component('playerEdit',{
            templateUrl: "app/playerEdit/playerEdit.tpl.html",
            controllerAs: "vm",
            controller: function ( $routeParams, playerService) {
                var self = this;

                this.playerKey=$routeParams.id;
                this.player={};

                playerService.getPlayer(this.playerKey)
                    .then(function(playerdata) {
                        self.player = playerdata;
                    })

                this.savePlayer = function(){
                    playerService.savePlayer(self.player).then(function(){
                        self.player={};
                    });
                };
            }
        })
})();