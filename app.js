let number=7
let guess=prompt("Guess a number between 1 and 10");
if(guess==number){
    console.log("You guessed it right!");
    alert("You guessed it right!");
}else{
    console.log("Try again!");
    alert("Try again!");
}if(guess+1==number){
    console.log("close enough but not correct!");
    alert("close enough but not correct!");
}
else if(guess-1==number){
    console.log("close enough but not correct!");
    alert("close enough but not correct!");
}else{
    console.log("Invalid input!");
    alert("Invalid input!");
}