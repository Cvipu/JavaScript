//Calculate the sum of digits of a given number.
// let a = 2389765;
// let sum = 0;
// while(a>0){
//     sum += (a%10);
//     a = Math.trunc(a/10);
// }
// console.log(sum);

//Calculate sum of all even digits and odd digits separately.
// let a = 3498765;
// let sumEven = 0;
// let sumOdd = 0;
// while(a>0){
//     if((a%10)%2 == 0){
//         sumEven += (a%10);
//     }
//     else{
//         sumOdd += (a%10);
//     }
//     a = Math.trunc(a/10);
// }
// console.log(sumEven,sumOdd)//18,24

//Multiplication of digits of a number;
let a = 34897;
let Multiplication = 1;
while(a>0){
    Multiplication *= (a%10);
    a = Math.trunc(a/10);
}
console.log(Multiplication);//6048