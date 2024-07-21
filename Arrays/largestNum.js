//Given an array of strings arr[] of length n representing non-negative integers, arrange them in a manner, such that, after concatenating them in order, it results in the largest possible number. Since the result may be very large, return it as a string.
//Input: n = 5, arr[] =  {"3", "30", "34", "5", "9"}
//Output: "9534330"
//Explanation: Given numbers are  {"3", "30", "34", "5", "9"}, the arrangement "9534330" gives the largest value.
//Input: n = 4, arr[] =  {"54", "546", "548", "60"}
//Output: "6054854654"
//Explanation: Given numbers are {"54", "546", "548", "60"}, the arrangement "6054854654" gives the largest value
let arr = ["54","546","548","60"];//6054854654
console.log(arr);
let temp = 0
let ans = '';
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(parseInt((arr[i]+arr[j]))>parseInt((arr[j]+arr[i]))){
            //console.log("do nothing");
        }
        else{
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
        }
    }
}
for(let k=0;k<arr.length;k++){
     ans += arr[k];
}
console.log("Largest number will be: ",ans);
