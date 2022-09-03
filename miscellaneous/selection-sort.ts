function selectionSort(nums: number[]): number[] {
    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[i]) {
                let temp: number = nums [i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    return nums;
}

const numbers = [3,8,1,3,3,5,7,1,2,6,2,7,0,1];
console.log(selectionSort(numbers));
