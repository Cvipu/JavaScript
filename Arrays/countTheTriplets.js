
// Count the triplets
// Difficulty: EasyAccuracy: 25.67%Submissions: 197K+Points: 2
// Given an array Arr consisting of N distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
 
// Example 1:

// Input: 
// N = 4 
// arr[] = {1, 5, 3, 2}
// Output: 2 
// Explanation: There are 2 triplets:
//  1 + 2 = 3 and 3 +2 = 5

// Example 2:

// Input: 
// N = 3
// arr[] = {2, 3, 4}
// Output: 0
// Explanation: No such triplet exits
// let arr = [1,5,3,2];
// arr.sort();
// for(let i=0;)

let arr=[1,2,3,4,5];
let str = "";
for(let i=0;i<arr.length;i++){
    str+=arr[i];
}
console.log(str);