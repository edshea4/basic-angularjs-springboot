(function() {
    angular.module('app')
        .component('playerCreate',{
            templateUrl: "app/playerCreate/playerCreate.tpl.html",
            controllerAs: "vm",
            controller: function (playerService) {
                var self = this;

                this.player={};

                this.savePlayer = function(){
                    playerService.savePlayer(self.player).then(function(){
                        self.player={};//.username="";
                        //self.player.playerKey="";
                        //self.player.exp=0;
                        //self.player.level=0;
                        //self.player.crafting=0;
                        //self.player.rareCrafting=0;
                        //self.player.points=0;
                        //self.player.rank=0;
                    });


                    //self.player.playerKey="";

                };
                //playerService.getPlayers().then(function (data) {
                //    self.playerList = data;
                //})
            }
        })
})();