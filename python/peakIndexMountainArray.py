# Example 4:

# Input: arr = [3,4,5,1]
# Output: 2


class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        for i in range(len(arr)):
            if arr[i] > arr[i+1]:
                return i
