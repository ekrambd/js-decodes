//Find Minimum Number in array

var minNum = function(nums){
    let min = nums[0];
    for(let i = 1; i < nums.length; i++)
    {
        if(nums[i] < min){
            min = nums[i];
        }
    }
    return min;    
};

console.log(minNum([8,3,12,1,6]));