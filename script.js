const secPointer = document.querySelector("#secPointer");
const minPointer = document.querySelector("#minPointer");
const houPointer = document.querySelector("#houPointer")
const time = new Date();


let secounds = time.getSeconds();
let minutes = time.getMinutes();
let hours = time.getHours()
console.log(hours);


houPointer.style.transform = `rotate(${hours*30}deg)`
minPointer.style.transform = `rotate(${minutes*6}deg)`;
secPointer.style.transform = `rotate(${secounds*6}deg)`;
setInterval(()=>{
    

    if(minutes%60 == 0){
        hours++;
        houPointer.style.transform = `rotate(${hours*30}deg)`;
        secounds++
        minutes++
    }else if(secounds%60 == 0){
        minutes++;
        minPointer.style.transform = `rotate(${minutes*6}deg)`;
        secPointer.style.transform = `rotate(${secounds*6}deg)`;
        secounds++;
    }else{
        secPointer.style.transform = `rotate(${secounds*6}deg)`;
        secounds++;
    }

    
}, 1000);
