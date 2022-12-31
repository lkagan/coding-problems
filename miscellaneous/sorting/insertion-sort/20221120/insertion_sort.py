from typing import List


def insertion_sort(nums: List[int]) -> List[int]:
    if len(nums) < 2:
        return nums

    for i in range(1, len(nums)):
        current = nums[i]
        j = i - 1

        while j >= 0 and current < nums[j]:
            nums[j+1] = nums[j]
            j -= 1

        j += 1
        nums[j] = current

    return nums
