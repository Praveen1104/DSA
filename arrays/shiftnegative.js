const arr=[-5, 3, -4, 88, -9, -10, 21, 5, 6];
let temp=Math.min(arr);
console.log(temp);
const te=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        te.push(arr[i]);

    }
    
}
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        te.push(arr[i]);

    }
    
}
console.log(te);