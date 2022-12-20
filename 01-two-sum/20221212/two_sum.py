from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pool = {}

        for i in range(0, len(nums) - 1):
            numToFind = target - nums[i]

            if numToFind in pool:
                return [pool[numToFind], i]

            pool[nums[i]] = i
