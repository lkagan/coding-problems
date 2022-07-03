def trapped_water(heights: list[int]) -> int:
    total_water = 0

    # Traverse the array from left to right
    for p in range(len(heights)):
        max_left = heights[p]
        max_right = heights[p]
        p_left = p
        p_right = p

        # Get the largest height on the left side of the current position
        while p_left >= 0:
            max_left = max(max_left, heights[p_left])
            p_left -= 1

        # Get the largest height on the right side of the current position
        while p_right < len(heights):
            max_right = max(max_right, heights[p_right])
            p_right += 1

        # Get the lowest height between the left and right side
        top = min(max_left, max_right)

        if top > heights[p]:
            total_water += top - heights[p]

    return total_water


heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

print(trapped_water(heights))
