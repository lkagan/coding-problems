from typing import List


def sort(nums: List[int]) -> List[int]:
    length = len(nums)
    is_sorted = True

    if length < 2:
        return nums

    for i in range(length - 1):
        for j in range(i, length):
            if nums[j] < nums[i]:
                is_sorted = False
                nums[i], nums[j] = [nums[j], nums[i]]

        if is_sorted:
            return nums

    return nums
