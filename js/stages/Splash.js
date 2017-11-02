'use strict';

function Splash(ctx) {
    var self = this;

    self.ctx = ctx;

    self.speed = 0.5;

    self.x = self.ctx.canvas.width * 0.3;
    self.width = self.ctx.canvas.width * 0.4;

    self.splashBackground = new Image();
    self.splashBackground.src = 'img/splash.jpg';

    self.spacebar = new Image();
    self.spacebar.src = 'img/spacebar.png';
}

Splash.prototype.draw = function() {
    var self = this;

    self.x = self.x + self.speed;
    if (self.x > self.ctx.canvas.width * 0.73 - self.width) {
        self.speed = -0.2;
    }
    if (self.x < self.ctx.canvas.width * 0.27) {
        self.speed = 0.2;
    }

    var x = self.x;
    var y = self.ctx.canvas.height * 0.4;
    var width = self.width;
    var height = self.ctx.canvas.height * 0.2;


    self.ctx.drawImage(self.splashBackground, 0, 0, self.ctx.canvas.width, self.ctx.canvas.height);
    self.ctx.drawImage(self.spacebar, x, y, width, height);

};
