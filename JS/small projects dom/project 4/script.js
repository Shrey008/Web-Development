// create an unordered list .allow users to add and remove list items dynamically using buttons

// var add = document.querySelector("#add");
// var rem = document.querySelector("#rem");
// var input = document.querySelector("input");
 
// var ul = document.querySelector("ul");

// var li;
// add.addEventListener("click",function(){
//     if(input.value.trim() ===''){}
//     else{ 
//         li = document.createElement("li");
//         li.textContent = input.value;
//         ul.appendChild(li);
//         input.value= "";
      
//     }
// })

// rem.addEventListener("click",function(){
//     ul.removeChild(li);
// })  


var add = document.querySelector("#add");
var remove = document.querySelector("#rem");
var inp = document.querySelector("input")
var ul = document.querySelector("ul");

var li;

add.addEventListener("click",function(){
    if(inp.value.trim() ===''){

    }
    else{
        li = document.createElement("li");
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = "";
    }
})
    remove.addEventListener("click",function(){
        ul.removeChild(li);
    }) 
 