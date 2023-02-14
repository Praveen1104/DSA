const arr=[1,4,5,67,8,10];
let find=10;

function linear(arr,find){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===find){
            console.log("position",i)
            return
        }
    }
}

linear(arr,find);


//recursion
function lr(i,arr,find){
    if(arr[i]===find){
        console.log("p-",i)
        return 

    }
    if(i===arr.length){
        console.log("not found")
    }

    return lr(i+1,arr,find)
}

lr(0,arr,67);

const x=[1,2,3,4,5];
x[10]=6;
console.log(x.length)
console.log(x);