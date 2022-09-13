function binarySearch(nums, term) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (term === nums[mid]) {
            return mid;
        } else if (term < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return null;
}

let nums = [1,2,3,4,5,7];
let term = 1;

console.log(binarySearch(nums, term));
