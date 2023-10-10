// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
console.log(y)
// count of attempts
var guess = 1
player_name = localStorage.getItem("player_name")
// until hit
function submit() {
    var x = document.getElementById("guessField").value;
    if (x == y) {
        window.alert("CONGRATULATIONS " + player_name + "!!! YOU GUESSED IT RIGHT iN  " + guess + " GUESSES");
        guess = 1;
    }
    // function for the number sent by the user
    else if (x > y) {
        guess++;
        window.alert("OPPS SORRY! TRY A SMALLER NUMBER")
    } else {
        guess++;
        window.alert("OPPS SORRY! TRY A LARGER NUMBER")
    }
}