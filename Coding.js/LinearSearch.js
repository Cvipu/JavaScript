let arr = [23,1,56,89,20]
let x = 19;
//You have to check whether x is present or not in arr, If present, print index of first occurence, if not present print
let flag = false; 
for(let i=0; i<arr.length;i++){
    if(arr[i] === x){
        console.log(i);
        flag = true;
        break;
    }
}
if(flag == false){
    console.log(-1);
}