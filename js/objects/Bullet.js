'use strict';

function Bullet(ctx, playerWidth, movingLeft, x, y) {
    var self = this;
    self.ctx = ctx;

    self.x = x + (movingLeft ? -10 : playerWidth);
    self.y = y + self.ctx.canvas.width * 0.02;

    self.speed = 6;
    self.movingLeft = movingLeft;

    self.width = self.ctx.canvas.width * 0.10;
    self.height = self.ctx.canvas.height * 0.06;

    self.gitInitLeft = new Image();
    self.gitInitLeft.src = 'img/gitInitLeft.png';

    self.gitInitRight = new Image();
    self.gitInitRight.src = 'img/gitInitRight.png';

}

Bullet.prototype.draw = function() {
    var self = this;

    if (self.movingLeft) {
        self.x = self.x - self.speed;
        self.y = self.y;
        if (self.x <= 0) {
            self.done = true;

        }
    } else {
        self.x = self.x + self.speed;
        self.y = self.y;
        if (self.x + self.width >= self.ctx.canvas.width) {
            self.done = true;
        }
    }
    if (self.movingLeft) {
        self.ctx.drawImage(self.gitInitLeft, self.x, self.y, self.width, self.height);

    } else {
        self.ctx.drawImage(self.gitInitRight, self.x, self.y, self.width, self.height);
    }
};

Bullet.prototype.move = function() {
    var self = this;


    if (self.visible === false) {

    } else if (self.visible === true) {
        console.log("die");
        self.bulletX = self.bulletX + self.speed;
    }


};
