let num = 239871;
let sum = 0;
while (num>0){
    let remainder = num % 10;
    num = Math.trunc(num / 10);
    sum += remainder;
}
console.log(sum);