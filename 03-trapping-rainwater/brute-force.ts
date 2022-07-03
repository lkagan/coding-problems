const trappedWater = (heights: number[]): number => {
    let totalWater = 0;

    // Traverse the array from left to right
    for (let p = 0; p < heights.length; p++) {
        let maxLeft: number = heights[p], maxRight: number = heights[p];
        let pLeft: number = p, pRight: number = p;

        // Get the largest height on the left side of the current position
        while (pLeft >= 0) {
            maxLeft = Math.max(maxLeft, heights[pLeft]);
            pLeft--;
        }

        // Get the largest height on the right side of the current position
        while (pRight < heights.length) {
            maxRight = Math.max(maxRight, heights[pRight]);
            pRight++;
        }

        // Get the lowest height between the left and right side
        const top = Math.min(maxLeft, maxRight);

        // Add water if current height is below the lowest height.
        if (top > heights[p]) {
            totalWater += top - heights[p];
        }
    }

    return totalWater;
}

const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

console.log(trappedWater(heights));