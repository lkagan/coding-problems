def greatest_volume_pair(nums):
    largest_area = 0

    for p1 in range(len(nums) - 1):
        for p2 in range(len(nums)):
            length = p2 - p1
            width = min(nums[p1], nums[p2])
            largest_area = max(largest_area, length * width)

    return largest_area


print(greatest_volume_pair([7, 1, 3, 9]))
