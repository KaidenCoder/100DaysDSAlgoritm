class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        s = []
        for i in range(len(nums)):
            if nums[i] % 2 == 0:
                s.append(nums[i])
        for j in range(len(nums)):
            if nums[j] % 2 != 0:
                s.append(nums[j])
        return s
