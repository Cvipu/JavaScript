//Write a program to return the difference between the count of odd numbers and even numbers.
// let arr=[10,20,30,40,55,66,77,83,55];
// let countOdd = 0;
// let coundEven = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         countOdd+=1;
//     }
//     else{
//         coundEven+=1;
//     }
// }
// console.log(countOdd-coundEven);

// let x=Math.abs(5-4);
// console.log(x);

//Write a program to calculate and return the sum of absolute difference between the adjacent number in an array of positive integers from the position entered by the user.
// let arr = [11,22,12,24,13,26,14,13,23];
// let sum = 0;
// let pos = 5;
// for(let i=pos;i<arr.length;i++){
//     sum+=Math.abs(arr[i]-arr[i-1]);
// }
// console.log(sum);

//Write a program to find the difference between the elements at odd index and even index.
// let arr = [10,20,30,40,50,60,70,40,30,40];
// let even = 0;
// let odd = 0;
// for(let i=0;i<arr.length;i++){
//     if(i%2==0){
//         even += arr[i]
//     }
//     else{
//         odd+=arr[i]
//     }
// }
// console.log(even-odd);

//A Cloth merchant has some pieces of cloth of different lengths. He has an order of curtains of length of 12 feet. He has to find how many curtains can  be made from these pieces. Length of pieces of cloth is recorded in feet.
// let arr = [3,42,60,6,14,48];
// let res = 0;
// for(let i=0;i<arr.length;i++){
//     res+=Math.trunc(arr[i]/12);
// }
// console.log(res);

//Conversion of binary into decimal
// let num = 1001111001;
// let ans = 0;
// let base = 1;
// let digit;
// while(num!=0){
//     digit=num%10;
//     ans+=digit*base;
//     base=base*2;
//     num=Math.trunc(num/10);
// }
// console.log(ans);

//Find count of negative integers.
// let arr = [9,-3,8,-6,-7,8,10,-3,-9]
// let count = 0;
// for(let i=0;i<arr.length;i++){
//       if(arr[i]<0){
//         count+=1;
//       }
// }
// console.log(count);

let bin = '101010';
let dec = parseInt(bin,2);
console.log(dec);
