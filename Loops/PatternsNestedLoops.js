str = '';
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        if(j%2!=0){
            str+='@';
        }
        else{
            str+='*'
        }
    }
    str+='\n'
}
console.log(str);