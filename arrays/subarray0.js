const arr=[0,2,4,-1,-3,4,5,-5];
const len=arr.length;
var pre=[arr[0]];
 for(let i=1;i<arr.length;i++){
     pre[i]=pre[i-1]+arr[i];
     console.log(pre[i-1],arr[i],pre[i])
 }
[0,2,6,5,2,6,10,15,10]
 for(let i=0;i<pre.length;i++){
    for(let j=i+1;j<pre.length;j++){
        if(pre[j]-pre[i]===0){
            console.log("index",i+1,"==>",j);
        }
    }
 }
 const hm=new Map();
 for(let i=0;i<arr.length;i++){
    let curs=0;
    let start=0;
    let end=-1;
 }