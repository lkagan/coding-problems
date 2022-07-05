const trappedWater = (heights: number[]): number => {
    let pLeft = 0;
    let pRight = heights.length;
    let totalWater = 0;
    let maxLeft = heights[ pLeft ];
    let maxRight = heights[ pRight ];

    while (pLeft !== pRight) {
        if (heights[ pLeft ] <= heights[ pRight ]) {
            let currentHeight = heights[ pLeft ];

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

            pLeft--
        }

        return totalWater;
    }
}


const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

console.log(trappedWater(heights));