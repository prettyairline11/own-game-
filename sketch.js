var gameState=0;
var playerCount=0;
var db;
var questions=[];
var questionCount = 0;

var game, form, player;

function setup() {
  createCanvas(800,400);

  db = firebase.database();
  var questionsRef = db.ref("Questions");

  //console.log(questionsRef)
  questionsRef.on("value", (data) => {
    console.log(data.val())
    questions = data.val();

  });

  //console.log(questions[0])
  game = new Game();
  game.getGameState();
  game.start();
}

function draw() {
  background(255,255,255);  
  if(playerCount === 2 && gameState === 0) {
    game.updateGameState(1)
  }

  if(gameState === 1) {
    game.play();
  }

  drawSprites();
}