let offset = 0;
const sliderLine = document.querySelector('.students');

let arrowRight = document.querySelector('.arrowRight');
arrowRight.addEventListener('click', () =>{
    offset += 315;
    if (offset > 940) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

let arrowLeft = document.querySelector('.arrowLeft');
arrowLeft.addEventListener('click', () =>{
    offset -= 315;
    if (offset < 0) {
        offset = 630;
    }
    sliderLine.style.left = -offset + 'px';
});