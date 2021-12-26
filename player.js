class Player{
    constructor(){
        this.index = 0;
        this.name=""
        this.score=0
    }

    getPlayerCount(){
        var playerCountRef = db.ref('playerCount');
        playerCountRef.on("value", function(data) {
            playerCount = data.val();
        })
    }

    updatePlayerCount(value){
        var dbRef = db.ref('/');
            dbRef.update({
                playerCount : value
            });
    }

    updateDetails() {
        var playerRef = db.ref("players/player" + player.index);
        playerRef.set({
            name : this.name,
            score : this.score
        });
    }
}