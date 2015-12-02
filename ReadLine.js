"use strict";

var readlineSync = require('readline-sync');

let answer = [];

let correctAnswerMsg = 'Nice job!';
let wrongAnswerMsg = 'Nope!  Guess again...';

answer.push(readlineSync.question('What gets wet while it dries?'));

if (answer[0] == 'sponge' || answer[0] == 'towel') {
    console.log(correctAnswerMsg);
    answer.push(readlineSync.question('What has to be broken before you can use it?'));

    if (answer[1] == 'egg') {
        console.log(correctAnswerMsg);
    } 
    else {
        console.log(wrongAnswerMsg);
    }

}
else {
    console.log(wrongAnswerMsg);
}

/*
// console.log(`Here is the answer:${ answer}!`);

if (answer == 'cadoodle' || answer == 'badoodle' || answer == 'D00DL3') {
    console.log ('Doodle!  Enter.')
}
else {
    console.log('Sorry, do something else.')
}


// Wait for user's response. 
let userName = readlineSync.question('May I have your name? :');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password). 
let favoriteFood = readlineSync.question('What is your favorite food? :', {
    hideEchoBack: false // The typed text on screen is hidden by `*` (default). 
});

console.log('Oh, ' + userName + ' loves ' + favoriteFood + '!');
*/