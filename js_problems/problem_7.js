//7. find largest element in nested array

var findLargest = function(arr){
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++)
    {
        if(Array.isArray(arr[i])){
            max = Math.max(max,findLargest(arr[i]));
        }else{
            max = Math.max(max,arr[i]);
        }
    }
    return max;    
};

console.log(findLargest([1, [5, 2], [9, [3, 20]], 4]));