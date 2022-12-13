class Solution:
    def maxArea(self, heights):
        maxWater = 0
        leftP = 0
        rightP = len(heights) - 1

        while leftP != rightP:
            left = heights[leftP]
            right = heights[rightP]
            water = (rightP - leftP) * min(left, right)
            maxWater = max(water, maxWater)

            if left < right:
                leftP += 1
            else:
                rightP -= 1

        return maxWater
