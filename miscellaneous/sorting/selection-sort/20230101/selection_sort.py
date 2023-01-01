from typing import List


def selection_sort(nums: List[int]) -> List[int]:
    is_sorted = True

    for i in range(len(nums) - 1):
        smallest = i

        for j in range(i + 1, len(nums)):
            if nums[j] < nums[smallest]:
                is_sorted = False
                smallest = j

        if is_sorted:
            return nums

        if smallest != i:
            [nums[i], nums[smallest]] = [nums[smallest], nums[i]]

    return nums