(function(){



const secretNr= Math.floor(Math.random()*22);
document.getElementById("button").addEventListener("click", function(){
    let playerNr = parseInt(document.getElementById("number").value)

    if(playerNr == secretNr){
        alert("Awesome! Your number"  + "(" + playerNr+ ") was correct. You can be named many things, hungry not being one of them.")
    }   
    else if ((playerNr - 1) === secretNr || (playerNr + 1) === secretNr){
        alert(`So close, but you just missed it! Are you in a class that started on the thirteenth or what?`)
    }
    else if (playerNr < 0 || playerNr >22  ) {
        alert(" Please type a number between 0 - 23")
    } else{
        alert("Bummer... You guessed " + "(" + playerNr  + ") and the secret number was ("  + secretNr + ").")

    }

});


})();