# Example 1:

# Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
# Output: [[9,1,2],[3,4,5],[6,7,8]]

# Example 2:

# Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
# Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]



class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        m = len(grid)
        n = len(grid[0])
        new_grid = [[0] * len(grid[0]) for _ in range(len(grid))]
        for row in range(m):
            for col in range(n):
                new_col = (col+k)%n
                wrap_around_count = (col+k)//n
                new_row = (row+wrap_around_count)%m
                new_grid[new_row][new_col] = grid[row][col]
        return new_grid        
        # total = m*n
        # start = total - (k%total)
        # new_grid = [[0] * len(grid[0]) for _ in range(len(grid))]
        # for i in range(start, total+start):
        #     moveIndex = i % total
        #     moveRow = moveIndex // n
        #     moveColumn = moveIndex % n
        #     new_grid.append(grid[moveRow][moveColumn])
        # return new_grid