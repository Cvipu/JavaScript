// let a = 1;
// a = a++;
// console.log(a);//1
// let a1 = 1;
// a1 = ++a1;
// console.log(a1);//2
// let a = 5;
// console.log(a++)//5
// console.log(++a)//7
// let a = 5;
// let b = (a++) + (++a) + 2 + (a++);
// console.log(a);8
// console.log(b);//21
//5+7+2+7
// let a = 3;
// let b = (a++) + a + 3 + (++a) + (--a) + (a++) + (a--);
// console.log(b)//3(4)+4(4)+3(4)+5(5)+4(4)+4(5)+5(4)=28
// console.log(a)//4
//Concatenation
// let a = 89;
// let b = 78;
// let c = a+b;
// console.log(c,typeof c);
//Type Coercion
// let a=3;
// let b='2';
// console.log(a*b)//6
// console.log(b-a)//-1
// console.log(b/a)
// console.log(true + 1)//2
// console.log(null + null + 2)//2
// let x = 9;
// let y = 5;
// let res = parseInt(x/y);//1
// let result = Math.trunc(x/y)//1
// console.log(res,result);
// let a = 5;
// let b = '2abcd';
// console.log(a*b)//
// let a =5;
// let b = undefined;
// console.log(a+b)//NaN
//Type Conversion
//string to number
// let a = '2';
// let b = Number(a);
// console.log(a, typeof a);
// console.log(b, typeof b);
//number to string
// let a = 234;
// let b = a.toString();
// console.log(a, typeof a);
// console.log(b, typeof b);
//string or number to boolean
// let a = "hello";
// let b = Boolean(a);
// console.log(b, typeof b);
// let a = 0;
// let b = null;
// let c = NaN;
// let d = undefined;
// let e = '';
// let f = false;
// console.log(Boolean(a));
// console.log(Boolean(b));
// console.log(Boolean(c));
// console.log(Boolean(d));
// console.log(Boolean(e));
// console.log(Boolean(f));
//Logical operators
//and
// console.log(0 && 5)//0
// console.log(null && "vipul")//null
// console.log(5 && 0)//0
// console.log(5 && undefined && "vipul")//undefined
// //or
// console.log(4||0);//4
// console.log(0||4);//4
// console.log(4 || 0 || "vipul");//4
//mixer
console.log(2 && 3 || 0)//3
console.log(0 && 5 || 3)//3
console.log(0 || 5 && 3)//3


