let myDate = new Date()


console.log(myDate.toString());  //inida standard time
console.log(myDate.toISOString());  //not to use
console.log(myDate.toDateString()); //date and year
console.log(myDate.toLocaleString()); //date and time both
console.log(myDate.toLocaleDateString()); //only date

let mycreatedDate = new Date(2023,0,23)
console.log(mycreatedDate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());

'${myCreatedDate.getDay()}'