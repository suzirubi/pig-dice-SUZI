// business logic
function Dice() {
  this.diceRoll = 0;
  // this.runningScore = 0;
}

// function Player1() {
//   this.totalScore = 0;
// }

Dice.prototype.rollDice = function() {
  var diceRoll = Math.floor((Math.random()*6)+1);
}

// Dice.prototype.turnScore = function() {
//   if (this.diceRoll === 1) {
//     this.runningScore = 0;
//   } else if (this.diceRoll !== 1) {
//     this.runningScore += this.diceRoll;
//   } else if (this.runningScore >= 100) {
//     alert("game over");
//   }
// }


// user logic
$(document).ready(function(){

  $("button#playerRoll").click(function() {

    var newRoll = new Dice();
    // var newTurn = new Player1();

    $("#rollOne").text(newRoll.rollDice());

    // $("#turnTotal").text(newRoll.turnScore());

  });
  //callback for holding

});
