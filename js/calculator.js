const addNumbers = () => {
    const firstNum = parseFloat(document.querySelector(".firstNum").value);
    const secondNum = parseFloat(document.querySelector(".secondNum").value);
    const result = firstNum + secondNum;
    document.querySelector(".calculateResult").innerText = result;
}

const mulNumbers = () => {
    const firstNum = parseFloat(document.querySelector(".firstNum").value);
    const secondNum = parseFloat(document.querySelector(".secondNum").value);
    const result = firstNum * secondNum;
    document.querySelector(".calculateResult").innerText = result;
}

const subNumbers = () => {
    const firstNum = parseFloat(document.querySelector(".firstNum").value);
    const secondNum = parseFloat(document.querySelector(".secondNum").value);
    const result = firstNum - secondNum;
    document.querySelector(".calculateResult").innerText = result;
}

const divideNumbers = () => {
    const firstNum = parseFloat(document.querySelector(".firstNum").value);
    const secondNum = parseFloat(document.querySelector(".secondNum").value);
    const result = firstNum / secondNum;
    document.querySelector(".calculateResult").innerText = result;
}