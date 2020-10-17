# Example 1:

# Input: n = 5
# Output: [-7,-1,1,3,4]
# Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

# Example 2:

# Input: n = 3
# Output: [-1,0,1]

# Example 3:

# Input: n = 1
# Output: [0]


class Solution:
    def sumZero(self, n: int) -> List[int]:
        a = []
        if n % 2 == 0:
            for i in range(1, n//2+1):
                a.append(-i)
            for i in range(1, n//2+1):
                a.append(i)
        if n % 2 != 0:
            a.append(0)
            for i in range(1, n//2+1):
                a.append(-i)
            for i in range(1, n//2+1):
                a.append(i)
        return a
