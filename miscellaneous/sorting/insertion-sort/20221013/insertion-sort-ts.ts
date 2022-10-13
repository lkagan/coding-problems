export default (nums: number[]) => {
    for (let i = 1; i < nums.length; ++i) {
        const current = nums[i];
        let j = i - 1;

        while(j >= 0 && nums[j] > current) {
            nums[j+1] = nums[j];
            j--;
        }

        nums[j+1] = current;
    }

    return nums;
}