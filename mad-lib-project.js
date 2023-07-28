const prompt = require("prompt-sync")({ sigint: true });
let blankOne = prompt("Choose a Noun: ");
let blankTwo = prompt("Choose a Adjective: ");
let blankThree = prompt("Choose a Noun: ");
let blankFour = prompt("Choose a Place: ");
let blankFive = prompt("Choose a Sport: ");
console.log("Once upon a time, a" + " " + blankOne + "found a" + " " + blankTwo + " " + blankThree + "." + 
"It traveled across" + " " + blankFour + " "+"and played tons of" +" "+ blankFive + "." + "Then it went back home.");