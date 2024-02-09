const dropdownFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = (event) => {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let numerical = document.querySelectorAll(".playing, .acquaintance");
let playing = document.querySelectorAll(".numerical, .acquaintance");
let acquaintance = document.querySelectorAll(".playing, .numerical");

let num = document.querySelectorAll(".numerical");
let play = document.querySelectorAll(".playing");
let acquaint = document.querySelectorAll(".acquaintance");

function showNumerical() {
    for (i = 0; i < numerical.length; i++) {
        console.log(numerical[i]);
        numerical[i].style.display = "none";
      }

      for (i = 0; i < num.length; i++) {
        console.log(num[i]);
        num[i].style.display = "block";
      }
    
};

function showPlaying() {
    for (i = 0; i < playing.length; i++) {
        console.log(playing[i]);
        playing[i].style.display = "none";
        
      }
    
      for (i = 0; i < play.length; i++) {
        console.log(play[i]);
        play[i].style.display = "block";
      }
    
};

function showAcquaintance() {
    for (i = 0; i < acquaintance.length; i++) {
        console.log(acquaintance[i]);
        acquaintance[i].style.display = "none";
      }

      for (i = 0; i < acquaint.length; i++) {
        console.log(acquaint[i]);
        acquaint[i].style.display = "block";
      }
    
};

