
// "use strict";
const gameOverSound = document.getElementById("gameOver")

function playGameOver(){
    gameOverSound.currentTime = 0 
    gameOverSound.play()
}
const dodger = document.getElementById("dodger");
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10)

    if(left > 0){
        dodger.style.left = `${left - 5}px`
        playSoundOnMovement()
    }
    if(left <= 0){
        playGameOver()
    }
}
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left < 360){
        dodger.style.left = `${left + 5}px`
        playSoundOnMovement()
    }
    if(left >= 360){
        playGameOver()
    }
}

function moveDodgerUp(){
    const bottomNumbers = dodger.style.bottom.replace("px","");
    const bottom = parseInt(bottomNumbers, 10);

    if(bottom < 380){
        dodger.style.bottom = `${bottom + 5}px`
        playSoundOnMovement()
    }
    if(bottom >= 380){
        playGameOver()
    }
}
function moveDodgerDown(){
    const bottomNumbers = dodger.style.bottom.replace("px","")
    const bottom = parseInt(bottomNumbers, 10)

    if(bottom > 0){
        dodger.style.bottom = `${bottom - 5}px`
        playSoundOnMovement();

    }
    if(bottom <= 0){
        playGameOver()
    }
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
    if(e.key === "ArrowUp"){
        moveDodgerUp();
    }

    if(e.key === "ArrowDown"){
        moveDodgerDown();
    }
});

const movementSound = document.getElementById("movementSound");

function playSoundOnMovement(){
    movementSound.currentTime = 0;
    movementSound.play();
}

