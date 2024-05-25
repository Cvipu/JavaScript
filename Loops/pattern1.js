let str='';
let n = 3;
for(let k=0;k<n;k++){
    for(let i=n;i>0;i--){
        for(let j=0;j<n-k;j++){
            str+=i+' ';
        }
    }
    str+='\n'
}
console.log(str);