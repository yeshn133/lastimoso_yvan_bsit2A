// declaring variables 
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// game logic

while (isSunk == false) {
    guess= prompt("Ready!!. aim, fire🔥🔥🔥! (Enter number 0-6) ");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number")
    }
    else {
        guesses = guesses + 1;
        alert("hit")

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits +=1;

            if (hits ==3){
                isSunk = true;
                alert ("You may sunk my battleship🚢")

            }
        } else {
            alert("You Miss😭")
        }
    }
}

var stats = "You sunk my Battleship at:"+ guesses + "guesses" + " and your accuracy is;" + (3/guesses);

alert(stats);