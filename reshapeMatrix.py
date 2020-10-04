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
