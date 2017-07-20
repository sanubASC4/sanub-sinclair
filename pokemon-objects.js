function Pokemon(name, type, hp, atk, def, legend){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.legend = legend;
}
var Blaziken = new Pokemon("Blaziken","Fire","80","120","70",false);
var Krookodile = new Pokemon("Krookodile","Ground","95","117","80",false);
var Zekrom = new Pokemon("Zekrom","Electric","100","150","120", true);
var Reshiram = new Pokemon("Reshiram","Dragon","100","120","100",true);
var Lucario = new Pokemon("Lucario","Fighting","70","110","70",false);
var Charizard = new Pokemon("Charizard","Fire","200","120","150",false);
var printRoster = [Blaziken, Krookodile, Zekrom, Reshiram, Lucario, Charizard];

for(i = 0; i < printRoster.length; i++){
    console.log(printRoster)
}
