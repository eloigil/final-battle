'use strict';

function Player(ctx, color, initialPosition, facingLeft, startsLeft) {
    var self = this;

    self.ctx = ctx;

    self.speed = self.ctx.canvas.width * 0.1;
    self.startsLeft = startsLeft;

    self.color = color;

    self.width = self.ctx.canvas.width * 0.1;
    self.height = self.ctx.canvas.height * 0.2;

    self.x = self.ctx.canvas.width * initialPosition;
    self.y = self.ctx.canvas.height - self.height * 1.3;

    self.isJumping = false;
    self.isFalling = false;
    self.maxJumpHeight = self.ctx.canvas.height * 0.15;
    self.maxSuperJumpHeight = self.height - self.ctx.canvas.height * 0.6;
    self.jumpSpeed = 10;

    self.maxBulletsAtAnyPoint = 5;
    self.bulletsCount = 0;
}

Player.prototype.draw = function() {
    var self = this;

    if (self.isJumping) {
        self.y = self.y - self.jumpSpeed;
        if (self.y < self.maxJumpHeight) {
            self.isJumping = false;
            self.isFalling = true;
        }
    } else if (self.isFalling) {
        self.y = self.y + self.jumpSpeed;
        if (self.y * 1.01 > self.ctx.canvas.height - self.height * 1.3) {
            self.isFalling = false;
        }
    }
    //
    // } else if (self.isJumping === false || self.y <= self.maxJumpHeight && self.y < self.ctx.canvas.height * 0.2) {
    //     self.isJumping = false;
    //     self.y = self.y + self.jumpSpeed;
    // }

    self.ctx.fillStyle = self.color;
    self.ctx.fillRect(self.x, self.y, self.width, self.height);
};


Player.prototype.moveRight = function() {
    var self = this;

    if (self.startsLeft === false) {
        if (self.x < self.ctx.canvas.width - self.width) {
            self.x = self.x + self.speed;
        }
    } else if (self.startsLeft === true) {
        if (self.x + self.width < self.ctx.canvas.width) {
            self.x = self.x + self.speed;
        }
    }
};

Player.prototype.moveLeft = function() {
    var self = this;
    if (self.startsLeft === true) {
        if (self.x > 0) {
            self.x = self.x - self.speed;
        }
    } else if (self.startsLeft === false) {
        if (self.x > 0) {
            self.x = self.x - self.speed;
        }
    }
};


Player.prototype.jump = function() {
    var self = this;

    if (!self.jumping && !self.falling) {
        self.isJumping = true;
    }
};


Player.prototype.canShoot = function() {
    var self = this;
    if (self.bulletsCount < self.maxBulletsAtAnyPoint) {
        self.bulletsCount++;
        return true;
    }
};

Player.prototype.bulletDone = function() {
    var self = this;

    self.bulletsCount--;
};
