function randLetter(){
    var alphabet = ["a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z"];
    console.log(alphabet[Math.round(Math.random()*25)]);
    alphabet.toUpperCase();
}
randLetter();

