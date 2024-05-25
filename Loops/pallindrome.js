// let str='';
for(let i=1;i<=1000;i++){
    
    let revNum = 0;
    while(i>0){
        revNum=revNum*10 + (i%10);
        i=Math.trunc(i/10);
    }
    if(i==revNum){
        console.log(temp);
    }
}
// console.log(str);
// let num = 121;
// let temp=num;
// let revNum=0;
// while(num>0){
//     revNum=revNum*10+(num%10);
//     num=Math.trunc(num/10);
// }
// if(temp==revNum){
//     console.log("Pallindrome");
// }
// else{
//     console.log("Non Pallindrome");
// }
