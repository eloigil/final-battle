'use strict';

function Battle(ctx /*charcater1, characater2*/ ) {
    var self = this;

    self.ctx = ctx;

    self.player1 = new Player(self.ctx, 'red', 0.1 /*, charcater1*/ );
    self.player2 = new Player(self.ctx, 'blue', 0.8, true /*, charcater2*/ );

    self.healthBar1 = new HealthBar(self.ctx, true);
    self.healthBar2 = new HealthBar(self.ctx, false);

    self.bullet1 = new Bullet(self.ctx, false, self.player1.x);
    self.bullet2 = new Bullet(self.ctx, false, self.player2.x);

}

Battle.prototype.draw = function() {
    var self = this;

    self.player1.draw();
    self.player2.draw();


    self.healthBar2.draw();
    self.healthBar1.draw();

    self.bullet1.draw();
    self.bullet2.draw();

    // self.player1.bullet.draw();
    // self.player2.bullet.draw();
};

Battle.prototype.handleKeyDown = function(keyCode) {
    var self = this;

    if (keyCode === 65) {
        self.player1.moveLeft();
    } else if (keyCode === 68) {
        self.player1.moveRight();
    } else if (keyCode === 87) {
        self.player1.jump();
    } else if (keyCode === 90) {
        self.bullet1.move();
    } else if (keyCode === 74) {
        self.player2.moveLeft();
    } else if (keyCode === 76) {
        self.player2.moveRight();
    } else if (keyCode === 73) {
        self.player2.jump();
    } else if (keyCode === 73) {
        self.player1.jump();
    }


};
