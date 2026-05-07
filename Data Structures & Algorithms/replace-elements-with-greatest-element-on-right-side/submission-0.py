class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        # traverse the array
        for i in range(len(arr)):
            max = float('-inf')
            j = i + 1
            while j < len(arr):
                if arr[j] > max:
                    max = arr[j]
                j += 1
            arr[i] = max

        arr[-1] = -1

        return arr