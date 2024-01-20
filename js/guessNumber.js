function checkNumb(){
  let randNum = Math.floor(Math.random() * 10) + 1;
  let variant1 = document.getElementById("inpNumber").value
    if(randNum == variant1){
      alert("Вітаю ви вгадали число "+randNum);
    }else{
      alert("Ви програли, компютер загадав "+randNum);
  }}