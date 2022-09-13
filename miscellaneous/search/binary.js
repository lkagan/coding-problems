function binarySearch(nums, start, end, term) {
    if (term < nums[start] || term > nums[end]) {
        return null;
    }

    const mid = Math.floor((start + end) / 2);

    if (term === nums[mid]) {
        return mid;
    } else if (term < nums[mid]) {
        return binarySearch(nums, start, mid - 1, term);
    } else {
        return binarySearch(nums, mid + 1, end, term);
    }
}

let nums;
let term;
nums = [1,2,3,4,5];
term = 4;

console.log(binarySearch(nums, 0, nums.length - 1, term));
