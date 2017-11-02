'use strict';

function Over(ctx, player) {
    var self = this;
    self.ctx = ctx;

    self.player = player;
    self.text();
    self.draw();


}


Over.prototype.text = function() {
    var self = this;
    if (self.player === 1) {

    } else if (self.player === 2) {

    }
};


Over.prototype.draw = function() {
    var self = this;

    self.ctx.fillStyle = 'yellow';
    self.ctx.fillRect(0, 0, self.ctx.width, self.ctx.height);
};
