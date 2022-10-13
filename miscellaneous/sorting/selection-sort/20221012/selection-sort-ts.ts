export default (nums: number[]): number[] => {
    let sorted = true;

    for (let i = 0; i < nums.length - 1; ++i) {
        let min = i;

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[min]) {
                min = j;
                sorted = false;
            }
        }

        min !== i && ([nums[i], nums[min]] = [nums[min], nums[i]]);

        if (sorted) {
            break;
        }
    }

    return nums;
}