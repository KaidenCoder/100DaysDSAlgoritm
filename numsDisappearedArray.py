
# Time limit exceeded solution

# class Solution:
#     def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
#         listArr = list(dict.fromkeys(nums))
#         allArr = []
#         for i in range(1,len(nums)+1):
#             allArr.append(i)
#         def filteredNums(num):
            
#             if(num not in listArr):
#                 return True
#             else:
#                 return False
            
#         filteredNumbers = filter(filteredNums, allArr)
#         absNumList = []
#         for absNum in filteredNumbers:
#             absNumList.append(absNum)
#         return absNumList 