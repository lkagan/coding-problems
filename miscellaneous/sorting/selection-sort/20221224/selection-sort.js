'use strict';

module.exports = (nums) => {
    for (let i = 0; i < nums.length - 1; ++i) {
        let sorted = true;
        let smallest = i;

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[smallest]) {
                sorted = false;
                smallest = j;
            }
        }

        if (sorted) return nums;

        smallest !== i && ([nums[smallest], nums[i]] = [nums[i], nums[smallest]]);
    }

    return nums;
}