let str = '';
let count = 0;
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if ((i >= 10 && i <= 20) || (i >= 50 && i <= 60)) {
        if (i % 2 != 0) {
            str += i;
            sum += i;
            count += 1;
        }
    }
}
console.log(str);
console.log(count);
console.log(sum);