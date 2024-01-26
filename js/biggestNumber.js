const getMaxNumber = () => {
    const number1 = parseFloat(document.querySelector(".fNum").value);
    const number2 = parseFloat(document.querySelector(".sNum").value);
    const number3 = parseFloat(document.querySelector(".tNum").value);

    if(!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
        const maxNumber = Math.max(number1, number2, number3);
        document.querySelector(".eightResult").innerText = maxNumber;
    } else{
        document.querySelector(".eightResult").innerText = "Введіть коректне число";
    }

}