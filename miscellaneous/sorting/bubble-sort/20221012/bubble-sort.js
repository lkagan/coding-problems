module.exports = (nums) => {
    const length = nums.length;

    if (length <= 1) {
        return nums;
    }

    let sorted = true;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                sorted = false;
            }
        }

        if (sorted) {
            break;
        }
    }

    return nums;
}