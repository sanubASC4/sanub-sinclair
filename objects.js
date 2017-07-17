var charizard = {"attack" : "Blaize","HP" : 
266, "legendary":false,"types":
["Fire","Flying"]};

console.log(charizard.attack);
console.log(charizard.HP);
console.log(charizard["HP"]);
console.log(charizard.types);
charizard.Hp = 100
console.log(charizard.Hp);

function Superhero(realName){
    this.realName = realName;
}

var superman = new Superhero("Clark Kent");
console.log(superman.realName);