const greatestVolumePair = (nums) => {
    let largestArea = 0;

    for (let p1 = 0; p1 < nums.length - 1; ++p1) {
        for (let p2 = 0; p2 < nums.length; ++p2) {
            const length = p2 - p1;
            const width = Math.min(nums[ p1 ], nums[ p2 ]);
            largestArea = Math.max(largestArea, length * width);
        }
    }

    return largestArea;
}

console.log(greatestVolumePair([ 7, 1, 3, 9 ]));