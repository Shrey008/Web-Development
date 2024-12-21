//setTimeout
// console.log("hey1");
// console.log("hey2");
// setTimeout(function(){
//     console.log("hey3")
// },2000)
// console.log("hey4");

// var count = 1;
// var time = setInterval(function(){
//     count++; 
//     console.log(count)
// if(count ===5)
//     clearInterval(time); 
// },1000); 


 
//fetchAPI
// fetch('https://randomuser.me/api/')
// .then(raw=> raw.json())
// .then(readable=>console.log(readable.results))


//Axios
//  axios.get('https://randomuser.me/api/')
//  .then(result=> console.log(result.data.results[0]))


 //promises
// const parchi = new Promise(function(resolve,reject){
//     fetch('https://randomuser.me/api/ ')
//     .then(raw=> raw.json())
//     .then(result =>{
//         if(result.results[0].gender ==="male") resolve();
//         else reject();
//     });
// });

// parchi
// .then(function(){
//     console.log("hara button");
// })

// .catch(function(){
//     console.log("laal button");
// })


//callbacks

// function abcd(a, b){
//     b();
// }

// abcd(1,function(){
//     console.log("callback chala")
// })

//  function getdata(url,callback){
//     fetch(url) 
//     .then(raw=> raw.json())
//     .then(result =>{
//         callback(result)
//     })
//  }

//  getdata("https://randomuser.me/api/",function(result){
//     console.log(result.results[0].name.first)
//  })


//async await
// async function abcd(){
//     let a = await fetch('https://randomuser.me/api/');
//     a = await a.json(); 
//     console.log(a);
// }

// abcd();


//callback vs promises vs async/await
// function datafetcher(url,callback){
//     fetch(url)
//     .then(raw=> raw.json())
//     .then(result=>{
//             callback(result)
//     })
// }

// datafetcher('https://randomuser.me/api/',function(result){
//     console.log(result);
// })


//promises
// function datafetcher(url,){
//     const oarchi = new promise(function(resolve,reject){
//         fetch(url)
//         .then(raw=>raw.json)
//         .then(result =>{
//             resolve(result);
//         })
//     })
//     return parchi;
// }

// datafetcher("https://randomuser.me/api/")
// .then(function{
//     console.log(result)
// })


//async await
//  function datafetcher(url) {
//     let data = await fetch(url);
//     let result = await data.json();
//     return result;
//  }
 
//  async function hh() {
//      let data = await datafetcher("https://randomuser.me/api/");
//      console.log(data);
//  }
 
//  hh();
//  async



//web worker
// var nums = Array.from({length:10000},(_,b)=>b+1);
// const worker = new Worker("webworkers.js");

// worker.postMessage(nums)

// worker.onmessage= function(data){
//     console.log(data.data)
// }
// console.log("champ");
// console.log("champ");
// setTimeout(function(){
//     console.log("hey");
// },1000)

// var inter = setInterval(function(){
//     console.log("hey 1");
// },4000)

// fetch('https://randomuser.me/api')
// .then(raw=> raw.json())
// .then(readable=> console.log(readable.results))


// axios.get('https://randomuser.me/api/')
// .then(result => console.log(result))


// const ans = new Promise(function(resolve,reject){
//     fetch('https://randomuser.me/api/')
//     .then(raw => raw.json())
//     .then(result =>{
//         if(result.results[0].gender === "male") resolve();
//         else reject();
//     });
// });

// ans
// .then(function(){
//     console.log("male");
// })
// .catch(function(){
//     console.log("female")
// })
 