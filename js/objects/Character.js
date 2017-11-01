
function Character(ctx) {

  var self = this;
  self.ctx = ctx;
  self.health = 100;

  self.height = self.ctx.canvas.height * 0.4;
  self.width = self.ctx.canvas.width * 0.2;

}

Character.prototype.draw = function() {
  var self = this;
  self.ctx.clearRect(0, 0, self.width, self.height);
  self.ctx.fillStyle = 'blue';
  self.ctx.fillRect(this.position[0], this.position[1], game.width, game.height * 0.1);

};

function Player1(ctx) {
  var self = this;
  Character.call(self, ctx);
  self.position = [self.ctx.canvas.height * 0.1, self.ctx.canvas * 0.2];
}

function Player2(ctx) {
  var self = this;
  Character.call(self, ctx);
  self.position = [self.ctx.canvas.height * 0.1, self.ctx.canvas * 0.2];
}

function battle() {

  game.ctx.clearRect(0, 0, game.width, game.height);
  game.ctx.fillStyle = 'green';
  game.ctx.fillRect(0, 0, game.width, game.height * 0.1);
  self.player1.draw();

}
