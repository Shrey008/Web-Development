//  var h1 = document.querySelector("h1")
//  //h1.style.color ='red';
//  h1.classList.add('makeitred')
//  //h1.classList.remove('makeitred')
//  h1.style.backgroundColor = "black";


var h1 = document.createElement('h1');
h1.textContent = "hey";
h1.classList.add("makeitred");

document.querySelector("body").appendChild(h1);