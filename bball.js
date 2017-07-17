function BasketballPlayer(name, team, height, position, number, netWorth, isGood, pastTeams){
    this.name = name;
    this.team = team;
    this.height = height;
    this.position = position;
    this.number = number;
    this.netWorth = netWorth;
    this.isGood = isGood;
    this.pastTeams = pastTeams;

}

var shaq = new BasketballPlayer("Shaquille O'neal", "Celtics", "7'1\"", "Center", 36, 10000000000, 
true, ["Magic","Lakers","Heat","Suns","Cavaliers"])

var bron = new BasketballPlayer("Lebron","Cavs","6'8","23",
"Small Forward",1000000000000, true,["Heat"])
bron.pastTeams.push(bron.team);
bron.team = "Warriors";

console.log(bron);