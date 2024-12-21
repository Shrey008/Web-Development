// function* print() {
//     console.log("started");
//     yield 1;

//     console.log("pehla chal chuka");
//     yield 2;

//     console.log("doosra chal chuka");
//     yield 3;
// }

// const ans = print();
// console.log(ans.next().value);
// console.log(ans.next().value);


function* allnums(){
    for (let i = 1; i<=10;i++){
        yield i;
    }
}

const gen = allnums();
console.log(gen.next().value);
console.log(gen.next().value);


