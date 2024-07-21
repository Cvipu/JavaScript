//Reverse a string using JavaScript
//without using built-in reverse() method
// let str = "ollo";
// let reversedStr = "";

// for(let i = str.length - 1; i >= 0; i--){
//     reversedStr += str[i];
// }
// console.log("Pallindrome string : ",reversedStr == str);

//using built-in reverse() method

// let str2 = "HelleH";

// let reversedStr2 = str2.split("").reverse().join("");
// console.log("Pallindrome string : ",reversedStr2 == str2);

//pallindrome using pointers
// let str = "levl";
// let start = 0;
// let flag = true;
// let end = str.length - 1;
// while(start < end){
//     if(str[start]!= str[end]){
//         flag = false;
//         break;
//     }
//     start++;
//     end--;
// }
// console.log("Is a pallindrome : ", flag);

//Reverse words in a string

// let str = "Hello World";
// let words = str.split(" ");//["Hello", "World"  ]
// let reversedWords = [];
// for(let i = words.length - 1; i >= 0; i--){
//     reversedWords.push(words[i]);
// }
// console.log("Reversed words : ", reversedWords.join(" "));

// let str = "Hello World";//output: "olleH dlroW"

// let reversedStr = "";
// let word = "";
// for(let i = 0; i <= str.length; i++){
//     if(str[i] === " " || i === str.length){
//         reversedStr += word.split("").reverse().join("") + " ";
//         word = "";
//     }else{
//         word += str[i];
//     }
// }
// console.log("Reversed words : ", reversedStr.trim());

// let str = "Hello World";
// let result = '';
// let word = "";
// for(let i = 0; i <= str.length; i++){
//     if(str[i] === " " || i === str.length){
//         let reversedStr = "";
//         for(let j = word.length - 1; j >= 0; j--){
//             reversedStr += word[j];
//         }
//         result += reversedStr + " ";
//         word = "";
//     }
//     else{
//         word += str[i];
//     }
// }
// console.log("Reversed words : ", result); 

//Print the occurrences of each character in a string

// let str = "Hello World";
// let charCount = {};
// for(let i = 0; i < str.length; i++){
//     if(charCount[str[i]]){
//         charCount[str[i]]++;
//     }
//     else{
//         charCount[str[i]] = 1;
//     }
// }
// console.log("Character Count : ", charCount);

// let test = {a:null, b: 3, c: 4};
// console.log(test['a'])

//Print the occurrences of each character in a string using reduce
// let str = "Hello World";

// let charCount = str.split('').reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
// }, {});
// console.log("Character Count : ", charCount);

//Print unique characters in a string
// let str = "Hello World";//output: "HeloWrd"
// //console.log(str.indexOf("e"));//1




// let uniqueStr = "";

// for(let i = 0; i < str.length; i++){
//     if(uniqueStr.indexOf(str[i]) === -1){
//         uniqueStr += str[i];
//     }
// }
// console.log("Unique characters : ", uniqueStr);

//Print unique characters in a string using methods
// let str = "Hello World";
// let test = [...new Set(str)].join("");
// console.log(test);

// let uniqueStr = [...new Set(str)].join("");
// console.log("Unique characters : ", uniqueStr);

//Print the repeated characters in a string
// let str = "Hello World";

// let repeatedChar = {};

// for(let i = 0; i < str.length; i++){
//     if(repeatedChar[str[i]]){
//         repeatedChar[str[i]]++;
//     }
//     else{
//         repeatedChar[str[i]] = 1;
//     }
// }

// let result = [];

// for(let key in repeatedChar){
//     if(repeatedChar[key] > 1){
//         result.push(key + " : " + repeatedChar[key]);
//     }
// }

// console.log("Repeated characters : ", result);

//Print the repeated characters in a string using reduce
let str = "Hello World";

let repeatedChar = str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});

let result = [];

for(let key in repeatedChar){
    if(repeatedChar[key] > 1){
        result.push(key + " : " + repeatedChar[key]);
    }
}

console.log("Repeated characters : ", result);


