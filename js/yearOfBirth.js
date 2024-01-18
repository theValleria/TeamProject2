const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const checkLeapYear = () => {
    const birthYearInput = document.getElementById('birthYearInput');
    const resultOutput = document.getElementById('result');

    const birthYear = parseInt(birthYearInput.value);

    if (isNaN(birthYear)) {
        resultOutput.textContent = "Будь ласка, введіть коректне число.";
    } else {
        const result = isLeapYear(birthYear) ? "Ви народилися у високосний рік!" : "Ви народилися у не високосний рік!";
        resultOutput.textContent = result;
    }
}