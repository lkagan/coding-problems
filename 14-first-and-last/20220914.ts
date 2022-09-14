function binarySearch(
    nums: number[],
    start: number,
    end: number,
    target: number
): number | null {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return null;
}

function searchRange(nums: number[] , target: number): number[] {
    if (nums.length === 0) {
        return [-1, -1];
    }

    let start: number = binarySearch(nums, 0, nums.length - 1, target);
    let end = start;

    if (start === null) {
        return [-1, -1];
    }

    let temp;

    while (start !== null) {
        temp = start;
        start = binarySearch(nums, 0, start - 1, target);
    }

    start = temp;

    while (end !== null) {
        temp = end;
        end = binarySearch(nums, end + 1, nums.length - 1, target);
    }

    end = temp;

    return [start, end];
}