str ='';
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        if(j%2!=0){
            str+=i+j+5;
        }
        else{
            str+=i+j-3;
        }
    }
    str+='\n'
}
console.log(str);