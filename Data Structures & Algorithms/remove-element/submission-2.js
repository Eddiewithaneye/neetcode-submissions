class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // start from the end 
        for(let i = nums.length-1; i >= 0; i-- ){
            // check if value is in that index
            if(nums[i] === val){ // shift values to the left
                // start from current pos and make our way up the array
                for(let j = i; j < nums.length - 1 ; j++){
                    nums[j] = nums[j+1];
                }
            // get rid of duplicate
            nums.length--;
            }
        }
        let k = nums.length;
        return k;
    }
}
