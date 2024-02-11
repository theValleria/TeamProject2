const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const checkLeapYear = () => {
    const birthYearInput = document.getElementById('birthYearInput');
    const resultOutput = document.getElementById('result');

    const birthYear = parseInt(birthYearInput.value);

    if (isNaN(birthYear)) {
        resultOutput.textContent = "Будь ласка, введіть коректне число.";
        resultOutput.style.color = "black";
    } else {
        if(isLeapYear(birthYear)){
            resultOutput.textContent = "Ви народилися у високосний рік!";
            resultOutput.style.color = "green";
        } else{
            resultOutput.textContent = "Ви народилися у не високосний рік!";
            resultOutput.style.color = "red";
        }
    }
}