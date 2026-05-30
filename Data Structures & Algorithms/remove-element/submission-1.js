class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // remove all occurences of val in nums
        let i = 0; // starting at the first index
        while(i < nums.length){
            if(nums[i] === val){ // if we find the value
                // remove the value by shifting the numbers to the left
                for(let j = i; j < nums.length - 1; j++){
                    nums[j] = nums[j+1];
                }
                nums.length--; // decrement the end to get rid of duplicate            
            }
            else{
                i++;
            }            
        }
        let k = nums.length;
        return k
        // return the length of array as an int, k.
    }
}