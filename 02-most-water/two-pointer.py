def find_max_area(nums):
    max_area = 0
    p1 = 0
    p2 = len(nums) - 1
    width = p2 - p1

    while width > 0:
        area = width * min(nums[p1], nums[p2])
        max_area = max(max_area, area)

        if nums[p1] < nums[p2]:
            p1 += 1
        else:
            p2 += 1

        width -= 1

    return max_area


print(find_max_area([5,3,2,8,7]))
print(find_max_area([5]))
print(find_max_area([]))