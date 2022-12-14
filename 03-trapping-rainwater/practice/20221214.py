from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        maxLeft = 0
        maxRight = 0
        left = 0
        right = len(height) - 1
        total = 0

        while left < right:
            if height[left] <= height[right]:
                if height[left] >= maxLeft:
                    maxLeft = height[left]
                else:
                    total += maxLeft - height[left]

                left += 1
            else:
                if height[right] >= maxRight:
                    maxRight = height[right]
                else:
                    total += maxRight - height[right]

                right -= 1

        return total

