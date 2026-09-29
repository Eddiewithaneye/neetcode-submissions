class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int count = 0;
        int streak = 0;

        for(int i = 0; i < nums.length; i++){
            if(nums[i] == 1){
                count++;
            }
            else{
                if (count > streak){
                    streak = count;
                }
                count = 0;
            }
        }
        if (count > streak){
            streak = count;
        }
        
        return streak;
    }
}