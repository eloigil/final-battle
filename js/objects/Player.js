'use strict';

function Player(ctx, color, initialPosition, facingLeft) {
    var self = this;

    self.ctx = ctx;

    self.speed = 50;
    self.facingLeft = facingLeft;

    self.color = color;

    self.width = self.ctx.canvas.width * 0.1;
    self.height = self.ctx.canvas.height * 0.4;

    self.x = self.ctx.canvas.width * initialPosition;
    self.y = self.ctx.canvas.height - self.height;

    self.jumpIndex = false;
    self.maxJumpHeight = self.height - self.ctx.canvas.height * 0.3;
    self.maxSuperJumpHeight = self.height - self.ctx.canvas.height * 0.6;
    self.jumpSpeed = 2;
}

Player.prototype.draw = function() {
    var self = this;

    // if jumping
    // if y not yet at self.maxJump level
    // y- = y - self.jumpSpeed
    // else
    // self.falling = true

    // if self.

    self.ctx.fillStyle = self.color;
    self.ctx.fillRect(self.x, self.y, self.width, self.height);
};


Player.prototype.moveRight = function() {
    var self = this;

    self.x = self.x + self.speed;
};


Player.prototype.moveLeft = function() {
    var self = this;

    self.x = self.x - self.speed;
};



Player.prototype.jumpAction = function() {

    var self = this;

    if (self.jumpIndex === true && self.y > self.maxJumpHeight) {

        self.y = self.y - self.jumpSpeed;
    } else if (self.y >= self.ctx.canvas.height * 0.6) {
        self.land();
        self.jumpIndex = true;
    } else if (self.jumpIndex === false || self.y <= self.maxJumpHeight && self.y < self.ctx.canvas.height * 0.2) {
        self.jumpIndex = false;
        self.y = self.y + self.jumpSpeed;
    }

};

Player.prototype.land = function() {
    var self = this;
    clearInterval(self.jumpInterval);
};

Player.prototype.jump = function() {
    var self = this;

    self.jumpIndex = true;
    self.jumpInterval = setInterval(function() {
        self.jumpAction();
    }, 10);
    console.log("jump done");

};

// Player.prototype.jump = function() {
//     var self = this;
//
//
//     if (self.jumpIndex === 0 && self.y >= self.maxJumpHeight) {
//         self.y = self.y - self.jumpSpeed;
//         console.log("0");
//         self.jumpIndex++;
//     } else if (self.jumpIndex === 1 && self.y >= self.maxSuperJumpHeight) {
//         self.y = self.y - self.jumpSpeed;
//         console.log("1");
//         self.jump();
//         self.jumpIndex++;
//     } else if (self.jumpIndex === 2 && self.y <= self.maxJumpHeight && self.y >= self.ctx.canvas.height - self.height) {
//         self.y = self.y + self.jumpSpeed;
//         self.jumpIndex = 0;
//         self.maxJumpHeight = self.ctx.canvas.height * 0.4;
//         console.log("2");
//     } else {
//         console.log("none");
//     }
//
// };

//
// Player.prototype.shoot = function() {
//     var self = this;
//     self.bullet = new Bullet(self.ctx);
//     self.bullet.draw();
//
// };
