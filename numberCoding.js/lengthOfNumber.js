let num = 349082399999;
let length = 0;
while(num > 0){
    let remainder = Math.trunc(num/10);
    num = remainder;
    length += 1;
}
console.log(length);
