class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        // go through the array
        let consecutive = 0
        let max = 0
        for(let i = 0; i < nums.length; i++){
            if(nums[i] == 1){
                ++consecutive;
                if(consecutive > max){
                    max = consecutive
                }
            }
            else{
                consecutive = 0;
            }
        }
        return max;
    }
}
