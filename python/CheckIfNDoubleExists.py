# Example 1:

# Input: arr = [10,2,5,3]
# Output: true
# Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.


class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        # arr.sort()
        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                if(arr[i]*2 == arr[j] or arr[i] == 2*arr[j]):
                    return True
        return False
