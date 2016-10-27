$(document).ready(function () {
  $('#deckChoice1').click(function() {
    $('#deckChoice1').addClass('glow-card');
    $('#deckChoice2').removeClass('glow-card');
    $('#deckChoice3').removeClass('glow-card');
  });

  $('#deckChoice2').click(function() {
    $('#deckChoice2').addClass('glow-card');
    $('#deckChoice1').removeClass('glow-card');
    $('#deckChoice3').removeClass('glow-card');
  });

  $('#deckChoice3').click(function() {
    $('#deckChoice3').addClass('glow-card');
    $('#deckChoice1').removeClass('glow-card');
    $('#deckChoice2').removeClass('glow-card');
  });
});
