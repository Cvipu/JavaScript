//Function declaration
// printMyName();
// function printMyName(){
//     console.log("Vipul");
// }

//function expression
//name();
// let name = function(){
//     console.log("Vipul");
// }
// name();
//console.log(name);
//Arrow function
// let name = () =>{
//     console.log("Vipul");
// }
//name();
//default parameters
// function addition(a,b,c){
//     console.log(a+b+c);
// }
// addition(5,6);
//Without parameter and without return
// function name(){
//     console.log("Vipul");
// }
// name();
//Withput parameter and with return
// function name(){
//     return "Vipul";
// }
// console.log(name());
//with parameter and without return
// function addition(a,b,c){
//     console.log(a+b+c);
// }
// addition(3,4,6);
//with parameter and with returning
// function addition(a,b){
//     return a+b;
// }
// console.log(addition(7,8));
// console.log(addition(7,8));
// console.log(addition(7,8));
// console.log(addition(7,8));
// console.log(addition(7,8));//This is pure function.
//Impure function
// function add(a,b){
//     let result = Math.trunc(Math.random()*100)+a+b;
//     console.log(result);
// }
// add(3,4);
// add(3,4);
// add(3,4);
// add(3,4);
// add(3,4);
//Callback function
// let num = Math.floor(Math.random()*10)-5;
// function regi(cb){
//     if(num>3){
//         cb();
//     }
// }
// function Login(){
//     console.log("Login is done");
// }
// regi(Login);
//IIFE :- Immediate Invoke Function Expression
(function(){
    console.log("hello how are u")
}())


