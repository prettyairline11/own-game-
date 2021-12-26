class Game{
    constructor(){
        this.question = createElement("h3");        
        this.answerBox = createInput("");        
        this.button = createButton("Submit");  
        this.question.position(100, 200);
        this.answerBox.position(600, 200);
        this.button.position(400, 500);
        this.question.hide();
        this.answerBox.hide();
        this.button.hide();  
    }

    getGameState() {
        var gameStateRef = db.ref('gameState');
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        })
    }

    updateGameState(value){
        var dbRef = db.ref('/');
        dbRef.update({
            gameState : value
        });
    }

    async start() {
        if(gameState === 0) {
            player = new Player();
            await player.getPlayerCount();
            form = new Form();
            form.display();
            
        }
    }

    play() {
        form.hideGreeting();
        this.question.show();
        this.answerBox.show();
        this.button.show();
        /*this.question.html(questions[questionCount].Qn);
        this.button.mousePressed(() => {
            var playerAnswer = this.answerBox.value();
            console.log(playerAnswer)
            for(var answer in questions[questionCount]["Ans "]) {
                console.log(answer);
                if(playerAnswer === answer) {
                    player.score += questions[questionCount]["Ans "][answer]
                    // Answered correctly - show the next question
                } else {
                    // Show "try again"
                }
            }
        })*/
    }
}


