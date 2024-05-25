let factorial = null;
let num = 5
if (num == 0) {
    console.log("Factorial of 0 is 1");
}
else {
    for (let i = 1; i < num; i++) {
        factorial = num * i;
        
    }
}
console.log("Factorial of ", num, " is: ", factorial);