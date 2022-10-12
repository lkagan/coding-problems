module.exports = (nums) => {
    const length = nums.length;
    let sorted = true;

    for (let i = 0; i < length - 1; ++i) {
        let min = i;

        for (j = i + 1; j < length; ++j) {
            if (nums[j] < nums[min]) {
                min = j;
                sorted = false;
            }
        }

        if (sorted) {
            break;
        }

        min !== i && ([nums[i], nums[min]] = [nums[min], nums[i]]);
    }

    return nums;
}