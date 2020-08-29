class Solution:
    def repeatedStringMatch(self, A: str, B: str) -> int:
        for s in set(B):
            if s not in set(A):
                return -1

        A_plus = ""
        size = 1
        while len(A_plus) <= len(A) + len(B):
            A_plus += A
            if B in A_plus:
                return size
            size += 1
        return -1
