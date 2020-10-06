# Input: nums = [1,2,2,3,1,4,2]
# Output: 6
# Explanation:
# The degree is 3 because the element 2 is repeated 3 times.
# So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.


class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        freq = collections.Counter(nums)
        degree = max(freq.values())
        if degree == 1:
            return 1
        candidates = [num for num in freq if freq[num] == degree]
        minlen = float('inf')
        for candidate in candidates:
            l = nums.index(candidate)
            r = len(nums) - nums[::-1].index(candidate)
            minlen = min(minlen, r-l)
        return minlen
