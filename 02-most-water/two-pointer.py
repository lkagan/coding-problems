def find_max_area(nums: list) -> int:
    max_area: int = 0
    p1: int = 0
    p2: int = len(nums) - 1
    width: int = p2 - p1

    while width > 0:
        area: int = width * min(nums[p1], nums[p2])
        max_area = max(max_area, area)

        if nums[p1] < nums[p2]:
            p1 += 1
        else:
            p2 += 1

        width -= 1

    return max_area


print(find_max_area([5, 3, 2, 8, 7]))
print(find_max_area([5]))
print(find_max_area([]))
