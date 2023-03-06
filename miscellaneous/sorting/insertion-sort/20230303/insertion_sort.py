from typing import List


def sort(nums: List[int]) -> List[int]:
    for i in range(len(nums)):
        current = nums[i]
        j = i - 1

        while j >= 0 and nums[j] > current:
            nums[j+1] = nums[j]
            j -= 1

        nums[j+1] = current

    return nums
