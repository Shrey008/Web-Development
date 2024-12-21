//call apply bind


// const obj ={name: "harsh"}
// function abcd(){
//     console.log(this);
// }
// abcd.call(obj) //12,"12.5" can also be passed as an argument then the output will be that
// abcd.call(12);



//apply
const obj ={name: "harsh"}
function abcd(a,b,c){
    console.log(this);
}
 
abcd.apply([12,5.5,"harsh"]);


//bind

const obj2 ={name: "harsh"}
function abcd(){
    console.log(this);
}
const baadmechalanekeliyefnc = abcd.bind(obj2) //12,"12.5" can also be passed as an argument then the output will be that
baadmechalanekeliyefnc();