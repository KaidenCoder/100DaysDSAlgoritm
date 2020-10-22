# Example 2:

# Input: target = [7], arr = [7]
# Output: true
# Explanation: arr is equal to target without any reverses.

# Example 3:

# Input: target = [1,12], arr = [12,1]
# Output: true

# Example 4:

# Input: target = [3,7,9], arr = [3,7,11]
# Output: false
# Explanation: arr doesn't have value 9 and it can never be converted to target.


class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        return collections.Counter(arr) == collections.Counter(target)
