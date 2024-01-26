let input = document.querySelector('#inpMinute');


input.addEventListener('click', function() {
    
    let minutes = prompt("Введіть кількість хвилин:");

   
    if (minutes !== null && minutes !== "") {
        minutes = parseInt(minutes);

        
        let hours = Math.floor(minutes / 60);
        let remainingMinutes = minutes % 60;

        
        let formatMinute = (remainingMinutes < 10 ? "0" : "") + remainingMinutes;

        
        let resultString = "Результат: " + hours + ":" + formatMinute;

        
        alert(resultString);
    }
});