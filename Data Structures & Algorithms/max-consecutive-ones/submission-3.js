class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
            // What number are we looking for... n
    let n = 1;
    let count = 0;
    let max = 0;
    if(nums.length === 0){
        return max;
    }

    for(let i = 0; i < nums.length; i++){ // traverse the array
        if(nums[i] === n){ // increment the count
            count++;
             if (count > max){
                max = count;
             }
        }
        // reset the count if you run into anything else
        else{
            count = 0;
        }
   }

   // return the max
   return max;

}
}