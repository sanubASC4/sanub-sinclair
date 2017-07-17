var mashArray = ["Milky Way","Millennium Falcon","Times Square","Skyworld"];
var firstQuestion = ["21","4762"];
var secondQuestion = ["Mario","Sonic"];
var prompt = require('prompt-sync')();
var answer1 = prompt("How many times will you strike?");
var answer2 = prompt("Who will you choose to fight?");
firstQuestion.push(answer1);
secondQuestion.push(answer2); 

function 