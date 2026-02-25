/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    const numSet = new Set(nums)
    if (numSet.size === nums.length){
        return "False"
    }else{
        return "True"
    }
}