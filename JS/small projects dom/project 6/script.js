//create a tabbed interface where clicking on tabs displays different content sections without page reload.

var home = document.querySelector("#Home");
var about = document.querySelector("#about");
var Contact = document.querySelector("#Contact");

var hometext = document.querySelector("#hometext");
var aboutext = document.querySelector("#aboutext");
var Contactext = document.querySelector("#Contactext");

hometext.style.display = "block";
hometext.style.width = "50%";

Home.addEventListener("click",function(){
    texthatao();
    hometext.style.display = "block";
    hometext.style.width = "50%";

})

about.addEventListener("click",function(){
    texthatao();
    aboutext.style.display = "block";
    aboutext.style.width = "50%";

})

Contact.addEventListener("click",function(){
    texthatao();
    Contactext.style.display = "block";
    Contactext.style.width = "50%";

})

function texthatao(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}