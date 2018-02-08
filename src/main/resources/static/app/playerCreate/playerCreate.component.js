(function() {
    angular.module('app')
        .component('playerList',{
            templateUrl: "app/playerList/playerList.tpl.html",
            controllerAs: "vm",
            controller: function (playerService) {
                var self = this;

                this.playerList = [];

                playerService.getPlayers().then(function (data) {
                    self.playerList = data;
                })
            }
        })
})();