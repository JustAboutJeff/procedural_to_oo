(function(window) {
  Game = {
    init: function() {
      $('#roller button.add').on('click', function() {
        addDie();
      });
      $('#roller button.roll').on('click', function() {
        rollDice();
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
      dice = getDice();
      value = getValue();
      $(dice).text(value);
    }
  };

  window.Game = Game;

}(window));
