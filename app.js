"use strict";

var colors = require(`colors`);
var readlineSync = require(`readline-sync`);

class Riddle {
    constructor(question, answer){
       this.question = question;
       this.answer = answer; 
    }  
     
    getQuestion(){
        return this.question;  
    }

    isAnswer(guess){
        if (this.answer === guess){
           return true 
        }
        else {
            return false;   
        }
    }
}

let riddles = [];

//all the riddles!

riddles.push(new Riddle(`What gets wet while it dries?`, `towel`));
riddles.push(new Riddle(`What has to be broken before you can use it?`, `egg`));
riddles.push(new Riddle(`What do I have in my pocket?`, `string`));
riddles.push(new Riddle(`What does a cat have that no other animal has?`, `kittens`));
riddles.push(new Riddle(`What always sleeps with its shoes on?`, `horse`));
riddles.push(new Riddle(`What can honk without a horn?`, `goose`));
riddles.push(new Riddle(`What has a horn but does not honk?`, `rhino`));
riddles.push(new Riddle(`What is higher without the head, than with it?`, `pillow`));
riddles.push(new Riddle(`What invention lets you look right through a wall?`, `window`));
riddles.push(new Riddle(`What has four legs, but cannot walk?`, `table`));
riddles.push(new Riddle(`What has a bark, but no bite?`, `tree`));
riddles.push(new Riddle(`What can clap without any hands?`, `thunder`));
riddles.push(new Riddle(`What wears a jacket, but no pants?`, `book`));
riddles.push(new Riddle(`What is made of wood, but cannot be sawed?`, `sawdust`));
riddles.push(new Riddle(`What flies around all day but never goes anywhere?`, `flag`));
riddles.push(new Riddle(`What has a hundred limbs, but cannot walk?`, `tree`));

riddles.push(new Riddle(`What room is never entered?`, `mushroom`));
riddles.push(new Riddle(`What gets beaten, and whipped, but never cries?`, `egg`));
riddles.push(new Riddle(`I have no bones and no legs, but if you keep me warm, I will soon walk away. What am I?`, `egg`));
riddles.push(new Riddle(`What kind of cup cannot hold water?`, `cupcake`));
riddles.push(new Riddle(`What has a foot but no legs??`, `snail`));
riddles.push(new Riddle(`I can sizzle like bacon, I am made with an egg, I have plenty of backbone, but lack a good leg. I peel layers like onions, but still remain whole; I can be long, like a flagpole, yet fit in a hole.  What am I?`, `snake`));
riddles.push(new Riddle(`Poor people have it. Rich people need it. If you eat it you die. What is it?`, `nothing`));
riddles.push(new Riddle(`What comes down but never goes up?`, `rain`));
riddles.push(new Riddle(`I am tall when I am young and I am short when I am old. What am I?`, `candle`));
riddles.push(new Riddle(`What goes up when rain comes down?`, `umbrella`));
riddles.push(new Riddle(`If I drink, I die. If i eat, I am fine. What am I?`, `fire`));
riddles.push(new Riddle(`What word becomes shorter when you add two letters to it?`, `short`));
riddles.push(new Riddle(`What travels around the world but stays in one spot?`, `stamp`));
riddles.push(new Riddle(`What occurs once in a minute, twice in a moment and never in one thousand years?`, `m`));

riddles.push(new Riddle(`What has 4 eyes but cannot see?`, `mississippi`));
riddles.push(new Riddle(`If I have it, I do not share it. If I share it, I do not have it. What is it?`, `secret`));
riddles.push(new Riddle(`Take away my first letter, and I still sound the same. Take away my last letter, I still sound the same. Even take away my letter in the middle, I will still sound the same. I am a five letter word. What am I?`, `empty`));
riddles.push(new Riddle(`What has hands but can not clap?`, `clock`));
riddles.push(new Riddle(`What can you catch but not throw?`, `cold`));
riddles.push(new Riddle(`What is at the end of a rainbow?`, `w`));
riddles.push(new Riddle(`What is as light as a feather, but even the world’s strongest man couldn’t hold it for more than a minute?`, `breath`));
riddles.push(new Riddle(`What starts with the letter t, is filled with t and ends in t?`, `teapot`));
riddles.push(new Riddle(`What is so delicate that saying its name breaks it?`, `silence`));
riddles.push(new Riddle(`You walk into a room with a match, a karosene lamp, a candle, and a fireplace. Which do you light first?`, `match`));
riddles.push(new Riddle(`A man was driving his truck. His lights were not on. The moon was not out. Up ahead, a woman was crossing the street. How did he see her?`, `it was day`));
riddles.push(new Riddle(`What kind of tree can you carry in your hand?`, `palm`));
riddles.push(new Riddle(`What has one eye but cannot see?`, `needle`));
//riddles.push(new Riddle(``, ``));

do {
    let index = Math.floor(Math.random() * riddles.length);
    let randomRiddle = riddles[index];
    let guess = readlineSync.question(randomRiddle.getQuestion());
    if (randomRiddle.isAnswer(guess) === true){
        console.log(`Great job!`);
    }
    else{
        console.log(`Sorry!`);
    }
    var anotherRiddle = readlineSync.question(`How about another riddle?`);
 } while (anotherRiddle.toUpperCase() === 'YES' || anotherRiddle.toUpperCase() === 'Y' || anotherRiddle.toUpperCase() === 'YEAH' || anotherRiddle.toUpperCase() === 'YUP');

console.log(`Thanks for playing!`);

process.exit();