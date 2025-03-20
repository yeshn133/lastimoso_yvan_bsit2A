console.log("Battleship Game")

// Declaring variables
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// Game logic
while (isSunk == false) {
    guess = prompt("Ready, aim, fire! 🔥 Enter a number from zero (0) to six (6). ❓");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    } else {
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits += 1;
            alert("Hit! 🎯🔥")

            if (hits == 3){
                isSunk = true;
                alert("You have sunk my battleship! 😒")
            }
        } else {
            alert("Miss! ⚠️❌ ")
        }
    }
}

var stats = "You have sunk my battleship at " + guesses + " guesses" + " and your accuracy rate is " + (3/guesses);

alert(stats);