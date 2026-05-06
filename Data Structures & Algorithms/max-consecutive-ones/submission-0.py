class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count = 0 # keep count of the 1's
        consecutive = 0

        for i in range(0,len(nums)):
            # check for 1
            if nums[i] == 1:
                count += 1
                if count > consecutive:
                    consecutive = count
            else:
                count = 0
        return consecutive
        