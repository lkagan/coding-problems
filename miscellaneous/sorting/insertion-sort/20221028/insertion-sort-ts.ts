export default (nums: number[]): number[] => {

    if (nums.length <= 1) {
        return nums;
    }

    for (let i = 1; i < nums.length; ++i) {
        const current = nums[i];
        let j = i - 1;

        while (current < nums[j]) {
            nums[j+1] = nums[j--];
        }

        nums[++j] = current;
    }

    return nums;
}