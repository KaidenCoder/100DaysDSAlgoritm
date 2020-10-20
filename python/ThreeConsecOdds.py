# Example 1:

# Input: arr = [2,6,4,1]
# Output: false
# Explanation: There are no three consecutive odds.

# Example 2:

# Input: arr = [1,2,34,3,4,5,7,23,12]
# Output: true
# Explanation: [5,7,23] are three consecutive odds.


class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        # if len(arr)< 3: return False
        for i in range(len(arr)-2):
            if all(arr[j] % 2 == 1 for j in range(i, i+3)):
                return True

        return False
