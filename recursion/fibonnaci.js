let peek=0;
let n=5;
function re(n){
    if(n==peek){
         return [0,1]
    }
    let result=re(n-1);

        result.push(result[n]+result[n-1])
    console.log(result)
    return result;
}

console.log(re(5));