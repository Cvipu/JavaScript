//Using string
// let a = 16461;
// let temp = a;
// let reverse = '';
// while(a>0){
//     let rem = a % 10;
//     reverse += rem;
//     a = Math.trunc(a/10);
// }
// //console.log(Number(reverse),typeof Number(reverse));
// if(temp == Number(reverse)){
//     console.log("pallindrome");
// }
// else{
//     console.log("Not a pallindrome number")
// }

//without using string 
let a = 16;
let temp = a;
let reverse = 0;
while(a > 0){
    reverse = (reverse*10) + (a%10);
    a = Math.trunc(a/10)
}
if(temp == reverse){
    console.log("pallindrome");
}
else{
    console.log("Not a pallindrome");
}

