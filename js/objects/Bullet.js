'use strict';

function Bullet(ctx, visible, x, y) {
    var self = this;
    self.ctx = ctx;

    self.x = x;
    self.y = y;

    self.speed = 1;
    self.visible = visible;

    self.bulletX = self.x + self.speed * self.width;
    self.bulletY = self.y;
    self.bulletWidth = self.ctx.canvas.width * 0.1;
    self.bulletHeight = self.ctx.canvas.height * 0.05;
}

Bullet.prototype.draw = function() {
    var self = this;

    self.ctx.fillStyle = 'grey';
    self.ctx.fillRect(self.bulletX, self.bulletY, self.bulletWidth, self.bulletHeight);


};

Bullet.prototype.move = function() {
    var self = this;

    if (self.visible === false) {

    } else if (self.visible === true) {
        self.bulletX = self.bulletX + self.speed;
    }


};
