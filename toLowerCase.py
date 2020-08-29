class Solution:
    def toLowerCase(self, str: str) -> str:
        # return str.lower()  ------ > Easiest solution
        str = list(str)
        for i in range(len(str)):
            if(str[i].isalpha() == True and str[i].islower() == False):
                str[i] = chr(ord(str[i]) + 32)
        return ''.join(str)
