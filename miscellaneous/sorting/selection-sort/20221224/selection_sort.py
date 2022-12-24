from typing import List


def selection_sort(nums: List[int]) -> List[int]:
    if len(nums) <= 1:
        return nums

    for i in range(len(nums) - 1):
        smallest = i
        for j in range(i + 1, len(nums)):
            if nums[j] < nums[smallest]:
                smallest = j

        if smallest != i:
            [nums[i], nums[smallest]] = [nums[smallest], nums[i]]

    return nums