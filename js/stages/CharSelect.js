'use strict';

function CharSelect(ctx) {
    var self = this;
    self.ctx = ctx;

    self.charNumPlayer1 = 1;
    self.charNumPlayer2 = 1;

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
    self.back = new Image();
    self.back.src = 'img/charSelectBackground.png';

    self.currentChampArray1 = [0, self.andresRight, self.looRight, self.zakRight, self.sbRight];
    self.player1Counter = 1;
    self.currentChampArray2 = [0, self.andresLeft, self.looLeft, self.zakLeft, self.sbLeft];
    self.player2Counter = 1;
    self.currentChamp1 = null;
    self.currentChamp2 = null;

    function handleKeyDownSelect(event) {
        var keyCode = event.keyCode;
        if (keyCode === 65) {
            self.player1Counter--;
            if (self.player1Counter < 1) {
                self.player1Counter = 4;
            }
        } else if (keyCode === 68) {
            self.player1Counter++;
            if (self.player1Counter > 4) {
                self.player1Counter = 1;
            }
        } else if (keyCode === 74) {
            self.player2Counter--;
            if (self.player2Counter < 1) {
                self.player2Counter = 4;
            }
        } else if (keyCode === 76) {
            self.player2Counter++;
            if (self.player2Counter > 4) {
                self.player2Counter = 1;
            }
        } else if (keyCode === 32) {
            window.removeEventListener("keydown", handleKeyDownSelect);
            // console.log("remove from charslect")

        }
    }

    window.addEventListener("keydown", handleKeyDownSelect);
}

CharSelect.prototype.draw = function() {
    var self = this;
    //console.log(self.player1Counter + ", " + self.player2Counter);

    self.ctx.drawImage(self.back, 0, 0, self.ctx.canvas.width, self.ctx.canvas.height);
    self.select();
    self.drawAll();
    self.ctx.drawImage(self.currentChamp1, self.ctx.canvas.width * 0.2, self.ctx.canvas.height * 0.4, self.ctx.canvas.width * 0.2, self.ctx.canvas.height * 0.5);
    self.ctx.drawImage(self.currentChamp2, self.ctx.canvas.width * 0.6, self.ctx.canvas.height * 0.4, self.ctx.canvas.width * 0.2, self.ctx.canvas.height * 0.5);
};


CharSelect.prototype.drawAll = function() {
    var self = this;

    // console.log("drawn");
    self.ctx.drawImage(self.andresRight, self.ctx.canvas.width * 0, self.ctx.canvas.height * 0.1, self.ctx.canvas.width * 0.1, self.ctx.canvas.height * 0.2);
    self.ctx.drawImage(self.looRight, self.ctx.canvas.width * 0.1, self.ctx.canvas.height * 0.1, self.ctx.canvas.width * 0.1, self.ctx.canvas.height * 0.2);
    self.ctx.drawImage(self.zakRight, self.ctx.canvas.width * 0.2, self.ctx.canvas.height * 0.1, self.ctx.canvas.width * 0.1, self.ctx.canvas.height * 0.2);
    self.ctx.drawImage(self.sbRight, self.ctx.canvas.width * 0.3, self.ctx.canvas.height * 0.1, self.ctx.canvas.width * 0.1, self.ctx.canvas.height * 0.2);

    self.ctx.drawImage(self.andresLeft, self.ctx.canvas.width * 0.6, self.ctx.canvas.height * 0.1, self.ctx.canvas.width * 0.1, self.ctx.canvas.height * 0.2);
    self.ctx.drawImage(self.looLeft, self.ctx.canvas.width * 0.7, self.ctx.canvas.height * 0.1, self.ctx.canvas.width * 0.1, self.ctx.canvas.height * 0.2);
    self.ctx.drawImage(self.zakLeft, self.ctx.canvas.width * 0.8, self.ctx.canvas.height * 0.1, self.ctx.canvas.width * 0.1, self.ctx.canvas.height * 0.2);
    self.ctx.drawImage(self.sbLeft, self.ctx.canvas.width * 0.9, self.ctx.canvas.height * 0.1, self.ctx.canvas.width * 0.1, self.ctx.canvas.height * 0.2);
};

CharSelect.prototype.select = function() {
    var self = this;

    self.currentChamp1 = self.currentChampArray1[self.player1Counter];
    self.currentChamp2 = self.currentChampArray2[self.player2Counter];

};


// CharSelect.prototype.handleKeyDown = function(keyCode) {
//     var self = this;
//
//     if (keyCode === 65) {
//         self.player1Counter--;
//         if (self.stage.player1Counter === -1) {
//             self.stage.player1Counter = 3;
//         }
//     } else if (keyCode === 68) {
//         self.self.player1Counter++;
//         if (self.stage.player1Counter === 4) {
//             self.stage.player1Counter = 0;
//         }
//     }
//     if (keyCode === 74) {
//         self.player2Counter--;
//         if (self.stage.player2Counter === -1) {
//             self.stage.player2Counter = 3;
//         }
//     } else if (keyCode === 76) {
//         self.self.player2Counter++;
//         if (self.stage.player2Counter === 4) {
//             self.stage.player2Counter = 0;
//         }
//     }
// };
