
let btnDecrease=document.querySelector(".btn_decrease");
let btnIncrease=document.querySelector(".btn_increase");
let btnReset=document.querySelector(".btn_reset");
let screen=document.querySelector(".screen");
let sayac=0;

  let recordNumber=Number(localStorage.getItem("number"));
window.addEventListener("DOMContentLoaded",function(){
 if(!isNaN(recordNumber)){
   
  sayac=recordNumber;
  screen.textContent=sayac; 
  console.log(recordNumber)
 }
});

btnDecrease.addEventListener("click",function(){
sayac--;
screen.textContent=sayac;
localStorage.setItem("number",sayac);
});

btnIncrease.addEventListener("click",function(){
   sayac++;
   screen.textContent=sayac;
   localStorage.setItem("number",sayac); 
});
btnReset.addEventListener("click",function(){
    sayac=0;
    screen.textContent=sayac;
    localStorage.setItem("number",sayac);
});

