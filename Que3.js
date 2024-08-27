// Display a message when a number is between a range.

let num = Math.ceil(Math.random() * 10);

console.log(num);

let guessnum = prompt('Guess the number between 1 and 10 inclusive');

if(guessnum == num){
    console.log('Matched');
}
else{
    console.log('Not matched , the number was ' + guessnum);
}
