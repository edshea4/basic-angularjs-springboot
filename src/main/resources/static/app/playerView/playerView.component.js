(function(){
    angular.module('app')
        .component('playerView',{
            templateUrl: "app/playerView/playerView.tpl.html",
            controllerAs: "vm",
            controller: function ($location , $routeParams , playerService) {

                var self = this;

                this.playerKey=$routeParams.id;

                this.player={};

                playerService.getPlayer(this.playerKey)
                    .then(function(playerdata) {
                        self.player = playerdata;
                    })
                this.editPlayer=function(playerKey)
                {
                    $location.path("/player/"+playerKey+"/edit");
                }
            }
        })

})();