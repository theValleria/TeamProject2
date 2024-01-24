function checkTime(){
    let minutes = document.getElementById("inpMinute").value;
    let hours = Math.floor(minutes / 60);
    let remainMinutes = minutes % 60;
    document.getElementById("resultt").innerText = hours + " : " + remainMinutes;
    console.log(remainMinutes);
}