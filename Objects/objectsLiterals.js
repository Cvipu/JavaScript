// var assistantManager = {
//     rangeTilesPerTurn: 3,
//     socialSkills: 30,
//     streetSmarts: 30,
//     health: 40,
//     specialAbility: "young and ambitious",
//     greeting: "Let's make some money"
// };
// var table = {
//     legs: 3,
//     color: "brown",
//     priceUSD: 100
// };
// // console.log(assistantManager);
// // console.log(table.color);
// var house = {
//     rooms: 3,
//     color: "brown",
//     priceUSD: 10000
// }
// var house2 = {};
// house2.rooms = 3;
// house2.color = "pink";
// house2.priceUSD = 12345;
// console.log(house);
// house.windows = 10;
// console.log(house);
// house.windows = 11;
// console.log(house);

// let teacher = {
//     name: 'utsav',
//     age: 24,
//     add: 'Delhi',
//     isActive: true,
//     isMale: true
// }
// console.log(teacher,typeof teacher);

// let student = {};
// student.name = "Vipul";
// student.subject = "MERN";
// student.height = "164 cm";
// student.add = "Jabalpur";
// console.log(student);

// let student={name:'Vipul',subject:'MERN',height:"165 cm",add:"Delhi"};
// console.log(student,typeof student);

// let teacher = new Object();
// teacher.name = 'Vipul';
// console.log(teacher);

function teacher(name,add,age){
    this.name = name,
    this.add = add,
    this.age = age
}
let utsav =  new teacher('Utsav','Delhi',29);
let Vicky = new teacher("Vicky","Odisha",20);
let ankita = new teacher("Ankita",'UP',29);
console.log(utsav);
console.log(Vicky);
console.log(ankita);
