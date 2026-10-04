class Solution {
    public int[] getConcatenation(int[] nums) {
        int capacity = nums.length * 2;
        int[] ans = new int[capacity];
        int i = 0;
        int tracker = 0;
        while(i < ans.length){
            ans[i] = nums[tracker];
            i++;
            tracker++;
            if (tracker == nums.length){
                tracker = 0;
            }
        }
    return ans;

        
    }
}