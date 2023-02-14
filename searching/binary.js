const arr=[6,8,4,3,9];

function binary(left,right,arr,find){
    if(right < left ){
        
   console.log("not present");
    }
    let mid=Math.floor((right+left)/2); 

    if(arr[mid]===find){
        console.log(arr[mid],'is located at',mid);
        return true;

    }
    if(find < arr[mid]){
       return binary(left,mid-1,arr,find)
    }
    if(find > arr[mid]){
       return binary(mid+1,right,arr,find)
    }
}

binary(0,arr.length-1,arr,3);