var mybtn=document.getElementById("mybtn")
var mylabel1=document.getElementById("mylabel1")
var mylabel2=document.getElementById("mylabel2")
var mylabel3=document.getElementById("mylabel3")
// min =1;
// max=6;
let randomNum1;
let randomNum2;
let randomNum3;
mybtn.onclick= function(){
    randomNum1 =Math.floor(Math.random()*6);
    randomNum2 =Math.floor(Math.random()*100);
    randomNum3 =Math.floor(Math.random()*20);
    mylabel1.textContent=randomNum1;
    mylabel2.textContent=randomNum2;
    mylabel3.textContent=randomNum3;
}