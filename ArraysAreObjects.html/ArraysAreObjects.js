// var fruits = [];
// fruits.push("Apple");
// fruits.push("pear");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

function arrBuilder(one,two,three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrBuilder("Apple","Pear","Banana");
console.log(simpleArr);