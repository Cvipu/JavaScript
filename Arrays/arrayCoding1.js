//Q1--------------print all emp name in array
let arr=[
    {name:'utsav',sal:1000,age:25,add:'delhi'},
    {name:'vicky',sal:1500,age:23,add:'odisha'},
    {name:'d',sal:7000,age:24,add:'delhi'},
    {name:'c',sal:5000,age:27,add:'nepal'},
    {name:'utsav',sal:2000,age:30,add:'jaipur'},
    {name:'utx',sal:3000,age:35,add:'jaipur'}
]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name);
// }

//Q2-------------print emp name whose sal is maximum
let large = 0;

for(let i=0;i<arr.length;i++){
    if(large < arr[i].sal){
        //max = arr[i].sal;
    } 
    console.log( Math.maxlarge,arr[i].sal)   
}

// for(let j=0;j<arr.length;j++){
//     if(max == arr[j].sal){
//         console.log(arr[j].name);
//     }
// }

//Q3-------------------print emp name whose sal is minimum
// let min=0;
// let i=0;
// if(arr[i].sal < arr[i+1].sal){
//     min = arr[i].sal;
// }
// else{
//     min = arr[i+1].sal;
// }
// for(let j=0;j<arr.length;j++){
//     if(min > arr[j].sal){
//         min = arr[j].sal;
//     }
// }
// for(let k=0;k<arr.length;k++){
//     if(min == arr[k].sal){
//         console.log(arr[k].name);
//     }
// }

//Q4---------------------print all employees where address is 'delhi'
// for(let i=0;i<arr.length;i++){
//     if(arr[i].add == 'delhi'){
//         console.log(arr[i]);
//     }
// }

//Q5---------------------- print all emp name whose age >= 25
// for(let i=0;i<arr.length;i++){
//     if(arr[i].age >= 25){
//         console.log(arr[i].name);
//     }
// }

//Q6--------------------print all emp total salary
// let count = 0
// for(let i=0;i<arr.length;i++){
//     count+=arr[i].sal
// }
// console.log(count);

//Q7 ------------------ print all emp avg salary

// let count = 0;
// for(let i=0;i<arr.length;i++){
//      count+=arr[i].sal
// }
// console.log(count/arr.length);

//Q8------------------- print total emp count
//console.log(arr.length);


//Q9---------------------- print 'replace d to d_company
// let arr1=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i].name == 'd'){
//         arr1.push({name:'d_comapany',sal:850,age:24,add:'delhi'});
//     }
//     else{
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1);

//Q10 ---------------------- print all emp in their name 'ut' word is included
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].name.length-1;j++){
//         if(arr[i].name[j] == 'u' && arr[i].name[j+1] == 't'){
//             console.log(arr[i].name);
//         }
//     }
// }



//Q11-------------------- print all emp details sort into ascending order a/c to their sal
// let arr1=[];
// for(let i=0;i<arr.length;i++){
//   arr1.push(arr[i].sal);
// }
// arr1.sort((a,b)=>{
//     return a-b;
// })
// //console.log(arr1);
// let arr2=[]
// for(let j=0;j<arr1.length;j++){
//     for(let k=0;k<arr.length;k++){
//         if(arr[k].sal==arr1[j]){
//              arr2.push(arr[k]);
//         }
//     }
// }
// console.log(arr2);


