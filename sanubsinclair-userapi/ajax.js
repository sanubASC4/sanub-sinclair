$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //   console.log(data.results);
      var user= data.results[0];
      console.log(user.picture.large);

  }
});
      