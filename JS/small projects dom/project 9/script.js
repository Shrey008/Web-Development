 var txr = document.querySelector("textarea");
var counter = document.querySelector("#counter");
 txr.addEventListener("input",function(){
    counter.textContent = txr.value.length;
 })