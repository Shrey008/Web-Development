//global - window
console.log(this);

//function in this - window
function abcd(){
    console.log(this);
}
abcd();

//method  - object
var obj = {
    name:function(){  //this is a method bcz you have written name int the field and written function there
        console.log(this);
    },
    age:24,
    email:"ajkfh"
}
obj.name();

//function inside method (es5) - window
var obj2 = {
    sayName: function(){
        function childfnc(){
           console.log(this)
        }
        childfnc();
    }
}
obj2.sayName();

//function inside method (es6) - window

obj3 = {
    sayName:function(){  //if we use arrow function in place of function it will return window
        const child =()=>{
            console.log(this);
        }
        child();
    }
} 

//constructor function me this ki value - new blank object

obj3.sayName();

function add(){
    console.log(this);
}
const ans =new add();

//event listener me this ki value - that element jispar event lis. laga ho
// document.querySelector("button")
// addEventListener("click",function(){
//     console.log(this);    //in any event listener the value of this will be the one that is slected before eventlistener
// })

document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
})