let lastd= new Date("jan 1, 2021 00:00:00").getTime();

// tik tik showing 
let x =setInterval(function(){

let now=new Date().getTime();
let diff= lastd - now;

let days =Math.floor (diff/(1000*60*60*24));
console.log(days);
let hours = Math.floor ((diff % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
console.log(hours);
let minutes = Math.floor ((diff% (1000*60*60))/(1000*60));
console.log (minutes);
let seconds =Math.floor ((diff%(1000*60))/(1000));
console.log(seconds);


document.getElementById("demo").innerHTML=days+"days,"+hours+" hrs: "+minutes+"m:"+seconds+"s"


}, 1000);
