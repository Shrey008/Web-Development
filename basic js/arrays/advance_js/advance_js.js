//Prototypal Inheritence

// Hum Object create karte hai and kisi ek parent constructor function ke prototype me kuch add kar dete hai and jb bhi add hota hai to wo parent se banne vle sabhi children instances ko wo properties jo parent ko prototype me di gai thi woh milti hai saugaat me 

// function makeHuman(naam, ages){
//     this.name = naam;
//     this.age = ages;
//     this.printMyName = function(){
//         console.log(this.name);//iss samay ye do objects k liye do alg alg memory le rhe honge, hum isko bacha sakte hai prototypal inheritance se
//     }
// }


function makeHuman(naam, ages){
    this.name = naam;
    this.age = ages;
    
}
//hum koi bhi ibject banate h vo prototype ban jaata hai
// prototype  me bhot si helper properties and methods hote h jo hum use kr skte hai apne kaam pura krne k liye
// iske prototype me add kr do 

//Added chacha to prototype of the makeHuman object
makeHuman.prototype.chacha = 12;

makeHuman.prototype.printMyName = function(){
    console.log(this.name);
}


const human1 = new makeHuman('abhi',21);
const human2 = new makeHuman('abhishek',21);

console.log(human1.printMyName());

// aisa koi bhi function jisme aap this ka use kr rhe ho aur us function ko call krte waqt aap new ka use krte h to new ka mtlb vaha par ek blank object hojaata hai 

//Closures --
// ek aisa function jo ek dusre function ko return krta hai aur use krta hai kisi parent function k variable ko 

function abcde(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

let ans2 = abcde();
ans2()


// Event Delegation 

// jab aap ek event listener se kai saare different Element ke event ko handle kar sake 

//Event Listener ko parent par lagaao and usko id, class ya tag ke basis par differnetiate krke different task krao 

// document.querySelector('#parent').addEventListener('click',function(){
//     console.log('parent'); //Issme event parent par lga h naki uske child par, but jb child pr click krnge to vo apne parent me koi event dhundhne lg jaega...isko Event Bubbling khete hai
// })

document.querySelector('#parent').addEventListener('click',function(chacha){
    console.log(chacha); //Gives details about the Event
    console.log(chacha.target); //Gives details about the Element Clicked
    console.log(chacha.target.id);

    if(chacha.target.id == 'play'){
        console.log('Play song');
    }else if(chacha.target.id == 'pause'){
        console.log('pause Song');
    }
})

// Higher Order Function 

// aisa koi bhi function jo ek function ko le rha hai as a argument ya return kre ek function ko 

function abs(){
    return function(){
        
    }
}

// error Handling

function div(a,b){
    try{

        if(b==0){
            throw Error('KOi gadbad hui');
        }
        console.log(a/b);
    } 
    catch(err){
        console.error(err);
    }
}
div(12,0)

// Custom Events 
// Hm apni marzi ka koi event bana sakte hai 

// Steps to create a custome Event 
// 1. Make a event as an variable by using event constuctor 
// 2. Attach to DOM Element
// 3. dispatch that event from that DOM element in which you attached the event

const evt = new Event('chacha');

let btn = document.querySelector('#btn');

btn.addEventListener('chacha',function(){
    console.log('Chacha vala event run hogya');
})

// to Run event 
 
btn.dispatchEvent(evt)