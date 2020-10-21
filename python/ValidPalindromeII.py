# Example 1:

# Input: "aba"
# Output: True

# Example 2:

# Input: "abca"
# Output: True
# Explanation: You could delete the character 'c'.


class Solution:
    def validPalindrome(self, s: str) -> bool:
        if s == s[::-1]:
            return True

        left = 0
        right = len(s) - 1
        while s[left] == s[right]:
            left = left + 1
            right = right - 1

        new_ls = s[left+1: right+1]
        if new_ls == new_ls[::-1]:
            return True
        new_rs = s[left:right]
        if new_rs == new_rs[::-1]:
            return True
        return False
