let result=[];
let temp=[];
function lc(arr1){
    const arr=arr1.sort((a,b)=>a-b);
    temp=[arr[0]];
    console.log(arr)
    for(let i=1;i<arr.length;i++){
        if(arr[i]===arr[i-1]+1){
            temp.push(arr[i])
        }
        
        else{
            result.push(temp);
            temp=[arr[i]];
        }
        console.log(temp)
    }
    console.log(result)
    console.log(result.sort((a,b)=> b.length-a.length)[0].length);
}
const arr=[55,66,2,4,3,6,5,1,7]
lc(arr)
