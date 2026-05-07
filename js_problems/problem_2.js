//2. Find the middle element for an Array

var middleElement = function(nums){
    let mid = Math.floor(nums.length/2);
    return nums[mid];
};

console.log(middleElement([10,20,30,40,50]));