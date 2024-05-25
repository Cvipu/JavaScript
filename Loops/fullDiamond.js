let str='';
for(let i=1;i<=4;i++){
    for(let j=4;j>i;j--){
        str+=' ';
    }
    for(let k=1;k<=i;k++){
        str+='*';
    }
    for(let l=1; l<i;l++){
        str+='*';
    }
    str+='\n';
}
// for(let a=1;a<=3;a++){
//     for(let b=1;b>=a;b++){
//         str+=' ';
//     }
//     for(let c=3;c>=a;c--){
//         str+='*';
//     }
//     for(let d=2;d>=a;d--){
//         str+='*';
//     }
//     str+='\n';
// }
console.log(str);