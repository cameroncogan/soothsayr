$(document).ready(function(){
  $('.newReading').on('click', function(event) {
    newReading();
  });
});


var newReading = function() {
  $.ajax({
    url: '/readings.json',
    method: 'post',
    contentType: 'application/json'
  })
  .done(function(cards) {
    cards;
  });
};
