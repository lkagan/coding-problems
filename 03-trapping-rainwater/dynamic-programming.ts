const trappedWater = (heights: number[]): number => {
    let pLeft = 0;
    let pRight: number = heights.length;
    let totalWater = 0;
    let maxLeft: number = heights[ pLeft ];
    let maxRight: number = heights[ pRight ];

    while (pLeft !== pRight) {
        if (heights[ pLeft ] <= heights[ pRight ]) {
            let currentHeight: number = heights[ pLeft ];

            if (currentHeight < maxLeft) {
                totalWater += maxLeft - currentHeight;
            } else {
                maxLeft = currentHeight;
            }

            pLeft++;
        } else {
            let currentHeight = heights[ pRight ];

            if (currentHeight < maxRight) {
                totalWater += maxRight - currentHeight;
            } else {
                maxRight = currentHeight;
            }

            pRight--;
        }
    }

    return totalWater;
}


const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

console.log(trappedWater(heights));