'use strict';

function Over(ctx, player) {
    var self = this;
    self.ctx = ctx;

    self.player = player;

    self.overBack = new Image();
    self.overBack.src = 'img/over.jpg';
    self.over1 = new Image();
    self.over1.src = 'img/over1.png';
    self.over2 = new Image();
    self.over2.src = 'img/over2.png';


}

Over.prototype.draw = function() {
    var self = this;

    self.ctx.drawImage(self.overBack, 0, 0, self.ctx.canvas.width, self.ctx.canvas.height);
    if (self.player === 1) {
        self.ctx.drawImage(self.over1, self.ctx.canvas.width * 0.2, self.ctx.canvas.height * 0.2, self.ctx.canvas.width * 0.6, self.ctx.canvas.height * 0.6);
    }
    if (self.player === 2) {
        self.ctx.drawImage(self.over2, self.ctx.canvas.width * 0.2, self.ctx.canvas.height * 0.2, self.ctx.canvas.width * 0.6, self.ctx.canvas.height * 0.6);
    }

};
