//3. Check if All Numbers in Array ara Positive

var checkAllPositive = function(nums){
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] < 0){
            return false;
        }
    }
    return true;    
};

console.log(checkAllPositive([2,5,7,1]));
console.log(checkAllPositive([2,5,7,1,-1]));