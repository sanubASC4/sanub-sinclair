$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //   console.log(data.results);
      var user= data.results[0];
      var suffix= user.name.title;
      var firstname = user.name.first;
      var lastname = user.name.last;
      var picture = user.picture.large;
      var state
      var nat = user.nat;
      console.log();
      $("body").append("<h1>Hello I am " +suffix +" "+firstname+" "+lastname+"  "+picture+" "+nat+"</h1>");
    }
});
$.ajax({
  url: 'https://restcountries.eu/rest/v2/name/{name}?fullText=true',
  dataType: 'json',
  success: function(data) {
   
  }
});

      