function trap(heights: number[]): number {
    let leftP = 0, leftMax = 0, rightMax = 0, totalWater = 0;
    let rightP = heights.length - 1;

    while (leftP !== rightP) {
        const leftVal = heights[leftP];
        const rightVal = heights[rightP];

        if (leftVal < rightVal) {
            if (leftVal > leftMax) {
                leftMax = leftVal;
            } else {
                totalWater += (leftMax - leftVal);
            }

            leftP++;
        } else {
            if (rightVal > rightMax) {
                rightMax = rightVal;
            } else {
                totalWater += (rightMax - rightVal);
            }

            rightP--;
        }
    }

    return totalWater;
}

const heights = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(heights));
