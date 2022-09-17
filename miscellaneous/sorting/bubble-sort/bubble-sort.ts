function bubbleSort(nums: number[]): number[] {
    for (let i = 0; i < nums.length; ++i) {
        // Assume sorted. No need to iterate if already sorted.
        let sorted = true;

        for (let j = 0; j < nums.length - i; ++j) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                sorted = false;  // Discovered array isn't sorted.
            }
        }

        if (sorted) {
            return nums;
        }
    }

    return nums;
}

const numbers = [
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2],
    [2, 1],
    [2],
    []
];

for (const nums of numbers) {
    console.log(bubbleSort(nums));
}
