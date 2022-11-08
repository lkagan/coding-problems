export default (nums: number[]): number[] => {
    for (let i = 1; i < nums.length; ++i) {
        const current = nums[i];
        let j = i - 1;

        while (j >= 0 && current < nums[j]) {
            nums[j+1] = nums[j--];
        }

        nums[j+1] = current;
    }

    return nums;
}