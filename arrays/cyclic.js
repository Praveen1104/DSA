const arr=[3, 88, 21, 5, 6];
let n=arr.length-1;
let m=arr[n]

const nw=[];
nw.push(m)
for(let i=0;i<arr.length-1;i++){
      nw.push(arr[i])
}
console.log(nw);

function shiftCyclically(arr, n){
    var i = 0
    var j = n-1
    while(i != j){
        let temp;

        temp = arr[i];
        arr[i] = arr[j];
        arr[j]= temp;
        i =i+1
    }
}

var arr1 = [1, 2, 3, 4, 5];
var n1 = arr.length;