# Example 1:

# Input:
# nums =
# [[1,2],
#  [3,4]]
# r = 1, c = 4
# Output:
# [[1,2,3,4]]
# Explanation:
# The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.


class Solution:
    def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
        num_list = []
        matrix = []

        for pair in nums:
            for item in pair:
                num_list.append(item)

        if (len(num_list)) != r * c:
            return nums

        for i in range(0, len(num_list), c):
            matrix.append(num_list[i:i+c])
        return matrix
