/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n) time
// O(n) space 
function containsDuplicate(nums) {
    const catalog = {}
    for(let i = 0; i < nums.length; i++){
        if(catalog[nums[i]]){
            return true
        } else {
            catalog[nums[i]] = true
        }
    }
    return false
};


// O(n logn)time
// O(1) space
function containsDuplicate(nums){
    nums.sort((a,b)=> a-b)
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i-1]){
            return true
        }
    }
    return false
}