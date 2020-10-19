# Example 1:

# Input: arr = [40,10,20,30]
# Output: [4,1,2,3]
# Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.


class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        rank = {v: k for k, v in enumerate((sorted(set(arr))))}
        for i in range(len(arr)):
            arr[i] = rank[arr[i]]+1
        return arr
