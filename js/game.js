(function(window) {
  Game = {
    init: function() {
      $('#roller button.add').on('click', function() {
        Game.addDie();
      });
      $('#roller button.roll').on('click', function() {
        Game.rollDice();
      });
    },
    getValue: function() {
      return Math.floor((Math.random()*6)+1);
    },
    getDice: function() {
      return $('.die');
    },
    addDie: function() {
      $('.dice').append('<div class="die">0</div>');
    },
    rollDice: function() {
      dice = Game.getDice();
      $(dice).each( function() {
        $(this).text(Game.getValue());
      });
    }
  };

  window.Game = Game;

}(window));
