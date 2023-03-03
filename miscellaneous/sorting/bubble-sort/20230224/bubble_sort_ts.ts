export default (nums: Array<number>) => {
    let sorted = true;

    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = 0; j < nums.length - i - 1; ++j) {
            if (nums[j] > nums[j+1]) {
                sorted = false;
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
        }

        if (sorted) {
            return nums;
        }
    }

    return nums;
}