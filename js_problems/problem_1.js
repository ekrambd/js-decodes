//1. Difference Between Largest and Smallast Number

var difference = function(nums){
    let min = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++)
    {
        if(nums[i] > max){
            max = nums[i];
        }
        
        if(nums[i] < min){
            min = nums[i];
        }
    }
    let diff = max - min;
    return diff;    
};

console.log(difference([4,9,1,7]));