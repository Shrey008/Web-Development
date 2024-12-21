//  var form = document.querySelector("form");
//  var inps = document.querySelectorAll('input[type="text"]');
//  var h4 = document.querySelector("h4");


// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     for(var i = 0; i<inps.length;i++){
//         if(inps[i].value.trim()=== ''){
//             h4.textContent = "sorry,please fill the fields";
//             h4.style.color = "red";
//         break;
//             }
//     }
// })

var form = document.querySelector("form");
var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("#inp2");
var h4 = document.querySelector("h4");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    if(inp1.value === '' || inp2.value === ''){
 h4.textContent = "SOme fields are blank";
 h4.style.color = "red";
    }
    else{
        h4.textContent="";
        h4.style.color = "black";
    }
})