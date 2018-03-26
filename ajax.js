document.addEventListener("DOMContentLoaded", function() {


  var button1 = document.getElementById("button1")
  button1.addEventListener('click', function(e) {
   var request = $.ajax ({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data: {},
    dataType: 'text'
  });
});
    var button2 = document.getElementById("button2")
    button2.addEventListener('click', function() {

      var request = $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function () {
      console.log("request succeeded: " + request.responseData);
    }).fail(function() {
      console.log("Request Failed! Sorry, will try harder next time");
    }).always(function () {
      console.log("Hey the request finished!");
    });
    });
    var button3 = document.getElementById("button3")
    button3.addEventListener('click', function(e) {
     var request = $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function (responseData) {
      console.log(responseData);
    });
    });
      var button4 = document.getElementById("button4")
      button4.addEventListener('click', function() {
      var request = $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {food: 'pancakes', quantity: 6, type: 'blueberry'},
      dataType: 'text'
    }).done(function (responseData) {
      console.log(responseData);
    });
    });
  });
