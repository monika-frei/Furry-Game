!function(t){var r={};function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(i,n,function(r){return t[r]}.bind(null,n));return i},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";e.r(r);e(1);function i(){this.x=0,this.y=0,this.direction="right"}function n(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}function o(){this.board=document.querySelectorAll("#board div"),this.furry=new i,this.coin=new n,this.score=0,this.index=function(t,r){return t+10*r},this.hideVisibleFurry=function(){var t=document.querySelector(".furry");t&&t.classList.remove("furry")},this.hideVisibleCoin=function(){var t=document.querySelector(".coin");t&&t.classList.remove("coin")},this.showFurry=function(){return this.hideVisibleFurry(),this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.showCoin=function(){return this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},this.moveFurry=function(){this.gameOver(),"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"up"===this.furry.direction?this.furry.y=this.furry.y-1:this.furry.y=this.furry.y+1,this.showFurry(),this.checkCoinCollision()},this.turnFurry=function(t){switch(t.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}};var t=this.score;this.checkCoinCollision=function(){this.furry.x===this.coin.x&&this.furry.y===this.coin.y&&(document.querySelector(".coin").classList.remove("coin"),t++,document.querySelector("#score div strong").innerHTML=t,this.coin=new n,this.showCoin())},this.newGame=function(){this.showFurry(),this.showCoin(),this.startGame()},this.gameOver=function(){if(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9){clearInterval(this.idSetInterval),this.hideVisibleFurry();var r=t,e=document.getElementById("over"),i=document.getElementById("main"),n=document.querySelector(".score");i.classList.add("invisible"),e.classList.remove("invisible"),n.innerText=r,document.querySelector("#score div strong").innerText=0,this.hideVisibleCoin()}},this.startGame=function(){var r=this;this.idSetInterval=setInterval((function(){r.moveFurry(),console.log(t)}),250)}}var s=new o;s.showFurry(),s.showCoin(),s.startGame(),document.addEventListener("keydown",(function(t){s.turnFurry(t)})),document.getElementById("play").addEventListener("click",(function(t){var r=document.getElementById("over"),e=document.getElementById("main");r.classList.add("invisible"),e.classList.remove("invisible");var i=new o;i.showFurry(),i.showCoin(),i.startGame(),document.addEventListener("keydown",(function(t){i.turnFurry(t)}))}))},function(t,r,e){}]);