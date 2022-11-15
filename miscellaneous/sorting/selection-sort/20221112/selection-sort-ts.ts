export default (nums: number[]): number[] => {
    if (nums.length < 2) {
        return nums;
    }

    let sorted = true;

    for (let i = 0; i < nums.length - 1; ++i) {
        let min = i;

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[min]) {
                min = j;
                sorted = false;
            }
        }

        if (sorted) {
            return nums;
        }

        min !== i && ([nums[i], nums[min]] = [nums[min], nums[i]]);
    }

    return nums;
}
