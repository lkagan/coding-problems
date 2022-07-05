def trapped_water(heights: list[int]) -> int:
    p_left = 0
    p_right: int = len(heights) - 1
    total_water = 0
    max_left: int = heights[p_left]
    max_right: int = heights[p_right]
    current_height: int

    while p_left != p_right:
        if heights[p_left] <= heights[p_right]:
            current_height = heights[p_left]

            if current_height < max_left:
                total_water += max_left - current_height
            else:
                max_left = current_height

            p_left += 1
        else:
            current_height = heights[p_right]

            if current_height < max_right:
                total_water += max_right - current_height
            else:
                max_right = current_height

                p_right -= 1

        return total_water


heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

print(trapped_water(heights))
