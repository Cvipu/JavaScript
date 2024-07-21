// let a = 8;
// let fact = 1;
// for(let i=1;i<=8;i++){
//     fact *= i;
// }
// console.log(fact);//40320

//Calculate the sum of n natural numbers
// let n = 10;
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum += i;
// }
// console.log(sum);//55

//Find the sum of factorials of every digit of a given number.
let a = 3478;
let fact = 1;
let sum = 0;
while(a>0){
    for(let i=1;i<=(a%10);i++){
        fact *= i;
    }
    sum += fact;
    a = Math.trunc(a/10);
}
console.log(sum);//6+24+5040+40320=45390

// let number = 123;
// let sumOf = 0;
// let factorial = 1;
// while (number > 0){
//     let rem = number % 10;
//     number = Math.trunc(number/10);
//     for(let i = 1;i<=rem;i++){
//         factorial *= i;
//     }
//     sumOf += factorial;
// }
// console.log(sumOf);//