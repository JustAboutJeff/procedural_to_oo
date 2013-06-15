(function(window) {
  Game = {
    init: function() {

    },
    getValue: function() {
      return Math.floor((Math.random()*6)+1);
    }
  };

  window.Game = Game;
}(window));


  $('#roller button.add').on('click', function() {
    $('.dice').append('<div class="die">0</div>');
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  });
