// -------------------------start game---------------------------------------
let gameOn = false;
let isCactusMoving = true; 
let isDinoRunning = true;

let gameOver = document.querySelector(".rex-runner-game-over");

document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        if (!gameOn) {
            moveCactus();
            dinoRun();
            gameOn = true;
            gameOver.style.display = "none";
        } else {
            jump()
        }
    }
});
// -------------------------dino jump---------------------------------------
const dino = document.querySelector(".dino");

function jump() {
    dino.style.top = '0px'; 

    setTimeout(() => { dino.style.top = '125px';}, 600);
}

// -------------------------dino run-----------------------------------------

function dinoRun() {
    dino.classList.add("dinoMoveAnimation");
    isDinoRunning = true;
}

function stopRunning() {
    dino.classList.remove("dinoMoveAnimation");
    isDinoRunning = false;
}

// -------------------------cactus moving---------------------------------------

const cactus = document.querySelector(".cactus");

function moveCactus() {
    cactus.classList.add("moveAnimation");
    isCactusMoving = true;
    requestAnimationFrame(moveCactusAnimation);
};

function stopCactus() {
    isCactusMoving = false; 
};

function resetCactus() {
    isCactusMoving = true; 
    requestAnimationFrame(moveCactusAnimation);
};

function moveCactusAnimation() {
    if (isCactusMoving) {
        cactus.classList.add("moveAnimation");
        requestAnimationFrame(moveCactusAnimation);
    } else {
        cactus.classList.remove("moveAnimation");
    }
};

// -------------------------game over---------------------------------------

function checkTouch() {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        if (
            dinoRect.left < cactusRect.right &&
            dinoRect.right > cactusRect.left &&
            dinoRect.top < cactusRect.bottom &&
            dinoRect.bottom > cactusRect.top
        ) {
            gameOn = false;
            stopCactus();
            stopRunning();
            gameOver.style.display = "block";

        } 
};
    
setInterval(checkTouch, 20);