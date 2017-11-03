'use strict';

function Player(ctx, color, initialPosition, facingLeft, startsLeft, champNum) {
    var self = this;

    self.ctx = ctx;

    self.speed = self.ctx.canvas.width * 0.1;
    self.startsLeft = startsLeft;
    self.facingLeft = facingLeft;

    // console.log(champNum);

    self.color = color;

    self.width = self.ctx.canvas.width * 0.1;
    self.height = self.ctx.canvas.height * 0.25;

    self.x = self.ctx.canvas.width * initialPosition;
    self.y = self.ctx.canvas.height - self.height * 1.3;

    self.isJumping = false;
    self.isFalling = false;
    self.maxJumpHeight = self.ctx.canvas.height * 0.15;
    self.maxSuperJumpHeight = self.height - self.ctx.canvas.height * 0.6;
    self.jumpSpeed = 10;

    self.maxBulletsAtAnyPoint = 5;
    self.bulletsCount = 0;

    self.champNum = champNum;
    self.currentChamp = null;
    self.andresLeft = new Image();
    self.andresLeft.src = 'img/andresLeft.png';
    self.looLeft = new Image();
    self.looLeft.src = 'img/mrlooLeft.png';
    self.zakLeft = new Image();
    self.zakLeft.src = 'img/zakLeft.png';
    self.sbLeft = new Image();
    self.sbLeft.src = 'img/superbyroLeft.png';

    self.andresRight = new Image();
    self.andresRight.src = 'img/andresRight.png';
    self.looRight = new Image();
    self.looRight.src = 'img/mrlooRight.png';
    self.zakRight = new Image();
    self.zakRight.src = 'img/zakRight.png';
    self.sbRight = new Image();
    self.sbRight.src = 'img/superbyroRight.png';
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


    // self.ctx.fillStyle = self.color;
    // self.ctx.fillRect(self.x, self.y, self.width, self.height);
    self.drawChamp();
};


Player.prototype.moveRight = function() {
    var self = this;

    if (self.startsLeft === false) {
        if (self.x + self.width < self.ctx.canvas.width - self.ctx.canvas.width * 0.001) {
            self.x = self.x + self.speed;
        }
    } else if (self.startsLeft === true) {
        if (self.x + self.width < self.ctx.canvas.width - self.ctx.canvas.width * 0.001) {
            self.x = self.x + self.speed;
        }
    }
};

Player.prototype.moveLeft = function() {
    var self = this;
    if (self.startsLeft === true) {
        if (self.x > 1) {
            self.x = self.x - self.speed;
        }
    } else if (self.startsLeft === false) {
        if (self.x > 1) {
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
        // console.log(self.bulletsCount);
        return true;
    }
};

Player.prototype.bulletDone = function() {
    var self = this;

    self.bulletsCount--;
};

Player.prototype.drawChamp = function() {
    var self = this;

    if (self.facingLeft === false) {
        if (self.champNum === 1) {
            self.currentChamp = self.andresRight;
        } else if (self.champNum === 2) {
            self.currentChamp = self.looRight;
        } else if (self.champNum === 4) {
            self.currentChamp = self.sbRight;
        } else if (self.champNum === 3) {
            self.currentChamp = self.zakRight;
        }

    } else if (self.facingLeft) {
        if (self.champNum === 1) {
            self.currentChamp = self.andresLeft;
        } else if (self.champNum === 2) {
            self.currentChamp = self.looLeft;
        } else if (self.champNum === 4) {
            self.currentChamp = self.sbLeft;
        } else if (self.champNum === 3) {
            self.currentChamp = self.zakLeft;
        }
    }
    self.ctx.drawImage(self.currentChamp, self.x, self.y, self.width, self.height);
};
