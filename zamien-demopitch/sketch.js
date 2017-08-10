var foodURL = "http://setgetgo.com/randomword/get.php";
var snackURL = "http://quotes.rest/qod.json";

function RandomWord() {
var requestStr = "http://setgetgo.com/randomword/get.php";

$.ajax({
    url:foodURL,
    success:function(data){
        var food = data;
        $("body").append("<h1>" +food+ "</h1>");
    }    
})
}
function RandomPhrases() {
    var requestStr ="https://api.chucknorris.io/jokes/random";

$.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    success:function(data){
        //var drink = data;
         var yomamajoke= data.value;
        // var jokes= user.id;
        $("body").append("<h1>" +yomamajoke+ "</h1>");
        }})
}
function RandomFacts(){
    var requestStr = " http://quotes.rest/qod.json";

$.ajax({
    url:"http://quotes.rest/qod.json",
    success:function(data){
        var thing = data.contents.quotes[0];
        var quotation = thing.quote;
        $("body").append("<h1>" +quotation+ "</h1>");
    }
})
}
function PickupLines(){
    var requestStr = "http://pebble-pickup.herokuapp.com/tweets/random";

$.ajax({
    url: "http://pebble-pickup.herokuapp.com/tweets/random",
    success:function(data){
        var lines = data.value;
        $("body").append("<h1>" +lines+ "</h1>");
    }
})
}



//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", "https://i.ytimg.com/vi/M-EZkvEzqt8/maxresdefault.jpg");
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "https://i.ytimg.com/vi/M-EZkvEzqt8/maxresdefault.jpg");
        $(".email").text("example@example.com");
    });
}
