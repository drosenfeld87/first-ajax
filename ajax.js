document.addEventListener("DOMContentLoaded", function() {


  var button1 = document.getElementById("button1")
  button1.addEventListener('click', function(e) {
   $.ajax ({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data: {},
    dataType: 'json'
  });
});
    var button2 = document.getElementById("button2")
    button2.addEventListener('click', function() {

      var request = $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done(function (responseData) {
      console.log("request succeeded: " + request.responseData);
    }).fail(function() {
      console.log("Request Failed! Sorry, will try harder next time");

    });
    });
  });
