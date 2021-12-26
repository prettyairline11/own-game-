class Form{
    constructor(){
        this.input = createInput("");
        this.input.position(200, 200);

        this.button = createButton('Start');
        this.button.position(300, 250);

        this.reset=createButton("Reset")
        this.reset.position(700,50);

        
        this.greeting = createElement("h2");
        this.greeting.position(200, 200);
    }

    display() {
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            this.greeting.html("Hi " + player.name + "...Wait for the other player to join.")

            playerCount += 1;
            player.index = playerCount;
            player.updatePlayerCount(playerCount);
            player.updateDetails();
        })

this.reset.mousePressed(()=>{
    
player.updatePlayerCount(0);
game.updateGameState(0);

db.ref('/').update({
    players:null
})

})   
    }

    hideGreeting() {
        this.greeting.hide();
    }
}