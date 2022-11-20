export default function (nums: number[]): number[] {
    if (nums.length < 2) {
        return nums;
    }

    for (let i = 1; i < nums.length; ++i) {
        let current = nums[i];
        let j = i - 1;

        while (j >= 0 && current < nums[j]) {
            nums[j+1] = nums[j--];
        }

        nums[++j] = current;
    }

    return nums;
}
