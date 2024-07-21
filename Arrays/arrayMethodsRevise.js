//push() method
// arr.push(20,30,'utsav');
// console.log(arr);

//pop() method
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop(2,3);
// console.log(arr);

//unshift() method
// arr.unshift(10,20,30);
// console.log(arr);

//shift() method
// arr.shift()
// console.log(arr);

//slice() method
// let updated_arr = arr.slice(-5,-3);
// console.log(updated_arr);
// console.log(arr);

//splice() method
// arr.splice(1,3,'vipul','utsav',9);
// console.log(arr); //[1,'vipul','utsav',9,5,6,6]
// arr.splice(2,'vip');
// console.log(arr);

//flat() method
// let arr = [1,2,3,'utsav',[2,3,4,5,['a','b','c',['e','x','y']]]];
// console.log(arr);
// let res = arr.flat();
// console.log(res.flat());

//indexOf() method
// let arr = [1,2,3,4,5,5,6];
// console.log(arr.indexOf(5,6));

//lastIndexOf() method
// console.log(arr.lastIndexOf(5,3));

//includes()
// console.log(arr.includes(2,1));

//find() method
// let arr = [
//     {name:'utsav',add:'jaipur'},
//     {name:'vicky',add:'odisha'},
//     {name:'utsav',add:'delhi'}
// ]
// let res = arr.findIndex((item,i,o_arr)=>{
//     if(item.name == 'utsav' && item.add == 'delhi'){
//         return i;
//     }
// });
// console.log(res);

//sort() method
//let arr = ['p','t','a','l','m','c'];
// let arr1 = ['utsav','vicky','ram','aman','pooja'];
// let arr = ['Hello, how are you','I am fine'];
// arr1.sort()
// arr.sort();
// console.log(arr);
// arr1.sort((a,b)=>{
//      return b-a;
// })
// console.log(arr1);

//reverse() method
// console.log(arr1);
// arr1.sort().reverse();
// let merge = arr.concat(arr1);
// console.log(merge);

//forEach() method
// let emp = [{name:'utsav',sal:89},{name:'vicky',sal:59},{name:'vivek',sal:200}];
// let sal = 0;
// emp.forEach((item,i,o_arr)=>{
//     if(item.name=='utsav'){
//     o_arr[i].name = 'utsav-jha'}
// });
// emp.forEach((item,i,o_arr)=>{
//     sal+=o_arr[i].sal;
// })
// console.log(emp);
// console.log(sal);

//map() method
//filter() method
//reduce() method
let arr = [4,5,6,7,8,9];
// let res = arr.reduce((acc,item,i,o_arr)=>{
//     return acc+item
// },0)
// console.log(res);

//reduceRight() method
// let res = arr.reduceRight((acc,item,i,o_arr)=>{
//     console.log('acc',acc);
//     console.log('item',item)
// },0);
// console.log(res);

//some() method
//every() method
//fill() method
let res = arr.fill('utsav',2,5);
console.log(res);


