# Example 1:

# Input: [1,2,2,3]
# Output: true

# Example 2:

# Input: [6,5,4,4]
# Output: true

# Example 3:

# Input: [1,3,2]
# Output: false


class Solution:
    def isMonotonic(self, A: List[int]) -> bool:
        increasing = decreasing = True

        for i in range(len(A)-1):
            if A[i] < A[i+1]:
                decreasing = False
            if A[i] > A[i+1]:
                increasing = False
        return increasing or decreasing
