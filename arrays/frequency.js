let str ='unacademy';
let obj={};
let result=str.split('');
result.map((item)=>{
    if(obj[item]){
        obj[item]+=1;

    }
    else{
        obj[item]=1;
    }
})
console.log(obj['a']);

const hm=new Map();

for (let i=0;i<result.length;i++){
    
    if(hm.has(result[i])){
        let count=hm.get(result[i])
        hm.set(result[i],count+1)
        
    }
    else{
        hm.set(result[i],1);
    }
    
    
}
console.log(hm);
for(let i=0;i<result.length;i++){
    if(hm.has(result[i])){
        let c=hm.get(result[i]);
        if(c===1){
            console.log(result[i]);
            break;
        }
    }
}
