document.addEventListener("DOMContentLoaded", function() {

  var button1 = document.querySelector('click1');
  button1.addEventListener('click', function() {
    window.alert("Button1 has been clicked");
  })

  $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/ping',
  method: 'GET',
  data: "",
  dataType: 'html'
});

});
