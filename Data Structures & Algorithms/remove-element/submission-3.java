class Solution {
    public int removeElement(int[] nums, int val) {
       // Go through array
       int k = 0;
       for(int i = 0; i < nums.length; i++){
        if(nums[i] != val){
            if(k<i){
                nums[k] = nums[i];
                k++;
            }
            else{
                k++;
            }
        }
       }
       return k;
}
}