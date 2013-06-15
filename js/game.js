(function(window) {

  function Die() {
    this.face = 1;
  };

  Die.prototype.roll = function() {
    return this.face = Math.floor((Math.random()*6)+1);
  };

  var Game = {
    gameDice: [],
    init: function() {
      $('#roller button.add').on('click', function() {
        Game.addDie();
      });
      $('#roller button.roll').on('click', function() {
        Game.rollDice();
      });
    },
    addDie: function() {
      this.gameDice.push(new Die());
      $('.dice').append('<div class="die">'+this.gameDice[this.gameDice.length-1].face+'</div>');
    },
    rollDice: function() {
      this.gameDice.forEach( function(die) {
        die.roll();
        console.log(die.face);
        $('.die').text(die.face);
      });
    }
  };

  window.Game = Game;

}(window));
