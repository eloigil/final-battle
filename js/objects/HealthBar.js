'use strict';

function HealthBar(ctx, left) {
    var self = this;

    self.ctx = ctx;
    self.health = 100;
    self.side = left;

    self.hbx = self.ctx.canvas.width * 0.55;
    self.hby = self.ctx.canvas.height * 0.05;

}

HealthBar.prototype.draw = function() {
    var self = this;

    self.hbWidth = self.ctx.canvas.width * 0.4 * self.health / 100;
    self.hbHeight = self.ctx.canvas.height * 0.05;

    if (self.side === true) {
        self.ctx.transform(-1, 0, 0, 1, 0, 0);
        self.ctx.fillStyle = 'rgb(' + (255 - Math.floor(255 * self.health / 100)) + ', ' + Math.floor(255 * self.health / 100) + ', 0)';
        self.ctx.fillRect(-self.ctx.canvas.width + self.hbx, self.hby, self.hbWidth, self.hbHeight);
    } else if (self.side === false) {
        self.ctx.fillStyle = 'rgb(' + (255 - Math.floor(255 * self.health / 100)) + ', ' + Math.floor(255 * self.health / 100) + ', 0)';
        self.ctx.fillRect(self.hbx, self.hby, self.hbWidth, self.hbHeight);
    }
};
