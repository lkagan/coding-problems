function maxArea(heights: number[]): number {
    let maxWater = 0;
    let leftP = 0;
    let left: number;
    let rightP = heights.length - 1;
    let right: number;

    while (leftP !== rightP) {
        left = heights[leftP];
        right = heights[rightP];
        const water = (rightP - leftP) * Math.min(left, right);
        maxWater = Math.max(water, maxWater);

        if (left < right) {
            leftP++;
        } else {
            rightP--;
        }
    }

    return maxWater;
};