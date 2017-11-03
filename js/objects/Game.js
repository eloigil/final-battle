'use strict';

function Game(canvas, width, height) {
    var self = this;

    self.canvas = canvas;
    self.ctx = canvas.getContext('2d');

    self.resize(width, height);
    self.stage = null;

    self.splash();
    self.draw();

    self.returnMain = false;

    self.currentChamp1 = 1;
    self.currentChamp2 = 2;

    self.ronin = new Audio('audio/ronin.mp3');
    self.ronin.play();

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


    if (self.state === "charSelect") {
        self.currentChamp1 = self.stage.player1Counter;
        self.currentChamp2 = self.stage.player2Counter;
    }

    if (self.stage.returnMain === true) {
        self.state = "splash";
        self.stage = new Splash(self.ctx);
    }
    if (self.stage.isOver === 1) {

        // window.removeEventListener("keydown", handleKeyDown);
        // delete self.stage;
        self.stage = new Over(self.ctx, 1);
        self.state = "Over";
        window.addEventListener("keydown", handleKeyDownOver);
        console.log("OVER 1");
    }
    if (self.stage.isOver === 2) {
        // delete self.stage;
        self.stage = new Over(self.ctx, 2);

        self.state = "Over";
        window.addEventListener("keydown", handleKeyDownOver);
        // window.removeEventListener("keydown", handleKeyDown);
        console.log("Over 2");
    }

    function handleKeyDownOver(event) {

        var keyCode = event.keyCode;
        if (keyCode === 32) {
            window.removeEventListener("keydown", handleKeyDownOver);
            self.charSelect();

        }
    }
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
            self.charSelect();
        }
    }

    window.addEventListener("keydown", handleKeyDown);
};


// CharSelect

Game.prototype.charSelect = function() {
    var self = this;
    self.in1 = new Audio('audio/in.mp3');
    self.in1.play();

    self.state = "charSelect";
    self.stage = new CharSelect(self.ctx);

    function handleKeyDown(event) {
        var keyCode = event.keyCode;

        if (keyCode === 32) {
            window.removeEventListener("keydown", handleKeyDown);

            self.battle();
            self.in2 = new Audio('audio/in.mp3');
            self.in2.play();
        }
    }

    window.addEventListener("keydown", handleKeyDown);
};


// --- battle

Game.prototype.battle = function() {
    var self = this;

    self.state = "battle";
    self.stage = new Battle(self.ctx, self.currentChamp1, self.currentChamp2);


    function handleKeyDown(event) {
        if (self.state === "Over") {
            window.removeEventListener("keydown", handleKeyDown);
        } else {
            var keyCode = event.keyCode;
            self.stage.handleKeyDown(keyCode);

        }
    }

    window.addEventListener("keydown", handleKeyDown);
};


// --- gameOver
