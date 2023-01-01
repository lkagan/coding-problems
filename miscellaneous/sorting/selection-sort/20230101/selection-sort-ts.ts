export default (nums: Array<number>): Array<number> => {
    let sorted = true;

    for (let i = 0; i < nums.length - 1; ++i) {
        let min = i;

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[min]) {
                sorted = false;
                min = j;
            }
        }

        if (sorted) return nums;

        i !== min && ([nums[min], nums[i]] = [nums[i], nums[min]]);
    }

    return nums;
}