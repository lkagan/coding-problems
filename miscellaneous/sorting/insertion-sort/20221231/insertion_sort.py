from typing import List


def insertion_sort(nums: List[int]) -> List[int]:
    for i in range(1, len(nums)):
        current = nums[i]
        j = i - 1

        while current < nums[j] and j >= 0:
            nums[j+1] = nums[j]
            j -= 1

        j += 1
        nums[j] = current

    return nums
