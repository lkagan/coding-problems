export default function insertionSort(nums: number[]): number[] {
    for (let i = 1; i < nums.length; ++i) {
        let j = i - 1;
        const current = nums[i];

        while (j >= 0 && current < nums[j]) {
            nums[j+1] = nums[j--];
        }

        nums[++j] = current;
    }

    return nums;
}