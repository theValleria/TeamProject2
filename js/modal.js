//изменение спан

let newNameUser = document.getElementById("span");
let submitlol = document.getElementById("name");
let nameSoxranit = document.getElementById("submit");
nameSoxranit.onclick = function () {
  newNameUser.innerText= submitlol.value;
}

//закрытие модального окна по кнопке

let modal = document.getElementById('modal-start');

let btnClose = document.getElementById('closeSave');

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

btnClose.onclick = function() {
    modal.style.display = 'none';
    modal.innerText= btnClose.value;
}


//код на закрытие 2 модального окна 
let modal1 =  document.getElementById("subscribe"); 

let Btn = document.getElementById("close"); 

Btn.onclick = function(){
     Btn.style.display="block";
     modal1.style.display="none";
}

//код на закрытие 2 модального окна
let modal2 = document.getElementById("subscribe");

let modalBtn2 = document.getElementById("subs");

modalBtn2.onclick = function(){
    modal2.style.display = "block";
}