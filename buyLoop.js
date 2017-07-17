var prompt = require('prompt-sync')();
var balance = 1000;
var lvDuffle = [];
while(balance >= 100){
console.log("You have " + balance + "left")
var answer = prompt("You can buy yeezy's for $400, gucci slides for $200, or ray bans for $100. What do you want to buy?");
    if(answer == "Yeezys" && balance >= 500){
        balance = balance - 400
        lvDuffle.push(Yeezys);
        console.log("You have successfully bought these pair of yeezys");
    }
    else if(answer == "gucci slides" && balance >= 300){
        balance = blance - 200;
        lvDuffle.push("Gucci slides");
        console.log("You have successfully bought this pair of Gucci slides");
    }
    else if(answer == "Ray Bans" && balance >= 200){
        balance = balance - 100;
        lvDuffle.push("Ray Bans");
        console.log("You have successfully bought this pair of Ray Bans");
    }
    else{
        console.log("You can't get this item");
    }
}
console.log("Leave, you're broke B!");