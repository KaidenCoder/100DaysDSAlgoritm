# Example 1:

# Input:
# [
#  [ 1, 2, 3 ],
#  [ 4, 5, 6 ],
#  [ 7, 8, 9 ]
# ]
# Output: [1,2,3,6,9,8,7,4,5]


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        res = []
        if len(matrix) == 0:
            return res
        row_begin, row_end = 0, len(matrix)-1  # 0,2
        col_begin, col_end = 0, len(matrix[0])-1
        while (row_begin <= row_end and col_begin <= col_end):
            for i in range(col_begin, col_end+1):
                res.append(matrix[row_begin][i])
            row_begin += 1
            for i in range(row_begin, row_end+1):
                res.append(matrix[i][col_end])
            col_end -= 1
            if (row_begin <= row_end):
                # for i in range(col_end,col_begin-1,-1):
                for i in reversed(range(col_begin, col_end+1)):  # 2,-1
                    res.append(matrix[row_end][i])
                row_end -= 1
            if (col_begin <= col_end):
                # for i in range(row_end,row_begin-1,-1):
                for i in reversed(range(row_begin, row_end+1)):
                    res.append(matrix[i][col_begin])
                col_begin += 1
        return res
