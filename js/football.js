const gameContainer = document.querySelector(".pitch");
const ball = document.querySelector(".ball");

gameContainer.addEventListener('click', function (event) {
    const containerRect = gameContainer.getBoundingClientRect();
    const x = event.clientX - containerRect.left - ball.clientWidth / 2;
    const y = event.clientY - containerRect.top - ball.clientHeight / 2;

    const maxX = gameContainer.clientWidth - ball.clientWidth;
    const maxY = gameContainer.clientHeight - ball.clientHeight;

    const clampedX = Math.min(Math.max(0, x), maxX);
    const clampedY = Math.min(Math.max(0, y), maxY);

    ball.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
});