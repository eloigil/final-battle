'use strict';

function Game(canvas, width, height) {
    var self = this;

    self.canvas = canvas;
    self.ctx = canvas.getContext('2d');

    self.resize(width, height);

    self.splash();
    self.draw();

    self.over();
}

Game.prototype.resize = function(width, height) {
    var self = this;

    self.ctx.canvas.width = width;
    self.ctx.canvas.height = height;
    self.width = width;
    self.height = height;
};


Game.prototype.draw = function() {
    var self = this;

    self.ctx.clearRect(0, 0, self.width, self.height);
    self.stage.draw();
    window.requestAnimationFrame(function() {
        self.draw();
    });

};

// --- splash

Game.prototype.splash = function() {
    var self = this;

    self.state = "splash";
    self.stage = new Splash(self.ctx);

    function handleKeyDown(event) {
        var keyCode = event.keyCode;
        if (keyCode === 32) {
            window.removeEventListener("keydown", handleKeyDown);
            self.battle();
        }
    }

    window.addEventListener("keydown", handleKeyDown);
};


// --- battle

Game.prototype.battle = function() {
    var self = this;

    self.state = "battle";
    self.stage = new Battle(self.ctx);


    function handleKeyDown(event) {
        var keyCode = event.keyCode;
        self.stage.handleKeyDown(keyCode);

    }

    window.addEventListener("keydown", handleKeyDown);
};

// --- gameOver

Game.prototype.over = function() {
    var self = this;

    if (self.battle.healthBar1.health <= 0) {
        console.log("1dead");
        self.state = "over";
        self.stage = new Over(self.ctx, "player1");
    } else if (self.battle.healthBar2.health <= 0) {
        console.log("2dead");
        self.state = "over";
        self.stage = new Over(self.ctx, "player2");
    }
};
