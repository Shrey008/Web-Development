// var h1 = document.createElement('h1');
// h1.textContent = "hey"
// h1.classList.addd("makeitred");

// var img = document.createElement('img');
// img.src = 'https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8';
// document.querySelector("body").appendChild(img);


//document.querySelector("body").appendChild(h1);

var btn = document.querySelector("button");
btn.addEventListener('mouseover',function(){
     btn.textContent = "starting..."
     btn.style.backgroundColor ="red "
}); 

var btn = document.querySelector("button");
btn.addEventListener('mouseleave',function(){
     btn.textContent = "make new card..."
     btn.style.backgroundColor ="#fff"
}); 



