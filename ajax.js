document.addEventListener("DOMContentLoaded", function() {

  var request = $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/',
  method: 'GET',
  data: {
  },
  dataType: 'html'
});

});
