const arr=[
    [1,2,3]
,[4,5,6]
,[7,8,9]];

let i=arr.length-1;
let out=""
while(i>=0){
    
    let j=arr[0].length-1;
    while(j>=0){
        console.log(arr[i][j]);
        j--;
    }
i--;

}
console.log(out);