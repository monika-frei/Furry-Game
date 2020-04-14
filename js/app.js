function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

function Game() {
    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function (x, y) {
        return x + (y * 10);
    };
    this.hideVisibleFurry = function() {
        let hideVisibleFurry = document.querySelector('.furry');
        if (hideVisibleFurry){
            hideVisibleFurry.classList.remove('furry');
        }
    };
    this.showFurry = function() {
        this.hideVisibleFurry();
        return this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };
    this.showCoin = function() {
        return this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };
    this.moveFurry = function() {
        this.gameOver();
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else {
            this.furry.y = this.furry.y + 1;
        }
        this.showFurry();
        this.checkCoinCollision();
    };
    this.startGame = function() {
            const self = this;
            this.idSetInterval = setInterval(function () {
                self.moveFurry();
            }, 250);
        };
    this.turnFurry = function(e) {
        switch (e.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    };
    this.checkCoinCollision = function(){
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            document.querySelector('.coin').classList.remove('coin');
            this.score ++;
            document.querySelector('#score div strong').innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    };
    this.gameOver = function(){
            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
                clearInterval(this.idSetInterval);
                this.hideVisibleFurry();
                window.alert('game over');
                
            }
    }
}

let game1 = new Game;

game1.showFurry();
game1.showCoin();
game1.startGame();

document.addEventListener('keydown',function(e) {
    game1.turnFurry(e);
});



