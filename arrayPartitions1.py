class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:  # [1,5,3,8,2,9]
        nums.sort()  # sort the nums array
        sum_ = 0
        for i in range(0, len(nums), 2):
            sum_ += nums[i]  # add index ele of 0, 2, 4, till len(nums)
        return sum_

# maximum sum out of the minimum of the pairs
# maximum sum possible for [1,4,3,2] is
# min(1,2) + min(3,4) = 1 + 3 = 4
# min(1,4) + min(2,3) = 1 + 2 = 3
# min(2,3) + min(1,4) = 2 + 1 = 3
# min(2,4) + min(1,3) = 2 + 1 = 3

# so here we see the maximum possible sum is 4
