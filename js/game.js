(function(window) {

  function Die(id) {
    this.face = this.roll();
    this.id = id;
  }

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
      die = new Die(this.gameDice.length);
      this.gameDice.push(die);
      $('.dice').append('<div id='+ die.id +' class="die">'+ this.gameDice[this.gameDice.length-1].face +'</div>');
    },
    rollDice: function() {
      this.gameDice.forEach( function(die) {
        die.roll();
        $('.die').eq(die.id).text(die.face);
      });
    }
  };

  window.Game = Game;

}(window));
