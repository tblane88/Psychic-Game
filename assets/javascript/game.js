$(document).ready(function() {
    // global variables
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var guessedLetters = [];
    var g = Math.floor(Math.random() * alphabet.length);


    // displays current wins, losses, and the guesses left
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#guesses").text(guessesLeft);


    // resets the game
    function initializeGame (){
        guessesLeft = 9;
        guessedLetters = [];
        $("#guesses").text(guessesLeft);
        $("#lettersGuessed").text(guessedLetters.toString());


        g = Math.floor(Math.random() * alphabet.length);
    };
    // keyup function
    $(document).keyup(function(event) {
        event.key = event.key.toLowerCase();

        // checks the guesses left
        if (guessesLeft > 1){
            // if user's key enters the computer guess the run the win routine
            if(event.key === alphabet[g]) {

                wins++;
                $("#wins").text(wins);
                alert("You win!");
                initializeGame();
                // if user's key does not match the computers guess then it checks if the guess has be chosen and adds it to the guess list and marks down the guesses left
            }else if($.inArray(event.key, guessedLetters) == -1){
                guessesLeft--;
                $("#guesses").text(guessesLeft);
                guessedLetters.push(event.key);
                $("#lettersGuessed").text(guessedLetters.toString());


            }


            // if guesses left is 0. then it runs the loss routine
        }else {
            alert("Sorry you lost");
            losses++;
            $("#losses").text(losses);

            initializeGame();
        };
     

    });


    initializeGame();

});



