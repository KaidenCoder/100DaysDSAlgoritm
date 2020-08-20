class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        begin = 0
        end = 0

        if(seats[0] == 0):
            idx = 0
            while(idx < len(seats) and seats[idx] == 0):
                begin += 1
                idx += 1

        if(seats[-1] == 0):
            idx = len(seats) - 1
            while(idx >= 0 and seats[idx] == 0):
                end += 1
                idx -= 1

        long = 0
        curr = 0
        for s in seats:
            if s == 0:
                curr += 1
                if curr > long:
                    long = curr
            else:
                curr = 0

        return max(begin, end, (long + 1)//2)
