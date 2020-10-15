# Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        length = len(nums)
        nums.sort()
        result = set()
        for i in range(length - 2):
            left = i + 1
            right = length - 1
            while left < right:
                sum_value = nums[i] + nums[left] + nums[right]
                if sum_value == 0:
                    result.add((nums[i], nums[left], nums[right]))
                    left += 1
                    right -= 1
                elif sum_value < 0:
                    left += 1
                else:
                    right -= 1
        return result
