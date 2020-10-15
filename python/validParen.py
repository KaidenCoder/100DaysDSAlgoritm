

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        bracket = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        check = set(['(', '{', '['])

        for i in s:
            if i in check:
                stack.append(i)
            elif stack and i == bracket[stack[-1]]:
                stack.pop()
            else:
                return False
        if(len(stack) == 0):
            return True
