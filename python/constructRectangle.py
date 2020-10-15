# Input: area = 4
# Output: [2,2]
# Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
# But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.


class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        sq_rt = sqrt(area)
        if int(sq_rt)**2 == area:
            return [int(sq_rt), int(sq_rt)]
        else:
            for i in range(int(sq_rt) + 1, area + 1):
                if i*(area//i) == area:
                    return [i, area//i]
