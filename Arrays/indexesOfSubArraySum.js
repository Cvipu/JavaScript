// Indexes of Subarray Sum
// Difficulty: MediumAccuracy: 16.5%Submissions: 1.6MPoints: 4
// Given an unsorted array arr of size n that contains only non negative integers, find a sub-array (continuous elements) that has sum equal to s. You mainly need to return the left and right indexes(1-based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right. If no such subarray exists return an array consisting of element -1.

// Examples:

// Input: arr[] = {1,2,3,7,5}, n = 5, s = 12
// Output: 2 4
// Explanation: The sum of elements from 2nd to 4th position is 12.
// Input: arr[] = {1,2,3,4,5,6,7,8,9,10}, n = 10, s = 15,
// Output: 1 5
// Explanation: The sum of elements from 1st to 5th position is 15.
// Input: arr[] = {7,2,1}, n = 3, s = 2
// Output: 2 2
// Explanation: The sum of elements from 2nd to 2nd position is 2.
// Input: arr[] = {5,3,4}, n = 3, s = 2
// Output: -1
// Explanation: There is no subarray with sum 2
let arr = [1,2,3,7,5];
let s = 12;
let sum = 0;
let start = 0;
let flag = false;
for (let i = start; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum == s) {
            flag = true;
            console.log(start + 1, j + 1)
            break;
        }
        else if (sum > s) {
            sum = 0;
            start = start + 1;
            break;
        }
        
    }
    if (flag == true) {
        break;
    }
}
if(flag == false){
    console.log(-1);
}