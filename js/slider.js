// let offset = 0;
// const sliderLine = document.querySelector('.students');

// let arrowRight = document.querySelector('.arrowRight');
// arrowRight.addEventListener('click', () =>{
//     offset += 315;
//     if (offset > 940) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

// let arrowLeft = document.querySelector('.arrowLeft');
// arrowLeft.addEventListener('click', () =>{
//     offset -= 315;
//     if (offset < 0) {
//         offset = 630;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

const ourTeamSlider = document.querySelector('.ourTeamSlider')
const dots = document.querySelectorAll('.dot')
let count = 0;

  
  
  let offset = 0;
const sliderLine = document.querySelector('.students');

let arrowRight = document.querySelector('.arrowRight');
arrowRight.addEventListener('click', () =>{
    dots[count].classList.remove("activ")
    count +=1;
    offset += 315;
    if (offset > 940) {
        offset = 0;
        count = 0;
    }
    sliderLine.style.left = -offset + 'px';
    dots[count].classList.add("activ")

});

let arrowLeft = document.querySelector('.arrowLeft');
arrowLeft.addEventListener('click', () =>{
    dots[count].classList.remove("activ")
    count -=1;
    offset -= 315;
    if (offset < 0) {
        offset = 630;
        count = 2;
    }
    sliderLine.style.left = -offset + 'px';
    dots[count].classList.add("activ")
});