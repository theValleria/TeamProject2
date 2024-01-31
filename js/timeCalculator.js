let timeSearch = document.querySelector('.time-search');


timeSearch.addEventListener('click', function() {
    
    let timeResult = document.querySelector(".resultt");
    let minutes = Number(document.querySelector("#inpMinute").value);
   
    if (minutes !== null && minutes !== "") {
        minutes = parseInt(minutes);

        let hours = Math.floor(minutes / 60);
        let remainingMinutes = minutes % 60;

        let formatMinute = (remainingMinutes < 10 ? "0" : "") + remainingMinutes;

        timeResult.textContent = hours + ":" + formatMinute;
    }
});