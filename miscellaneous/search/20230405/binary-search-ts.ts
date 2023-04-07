export default function binarySearch(
    nums: Array<number>,
    target: number,
    start?: number,
    end?: number,
): number {
    start = start ?? 0;
    end = end ?? nums.length - 1;

    if (end - start < 0) throw new Error('Invalid input');

    const mid = Math.floor((end - start)/2) + start;

    if (target < nums[mid]) return binarySearch(nums, target, start, mid);
    if (target > nums[mid]) return binarySearch(nums, target, mid, end);
    if (target === nums[mid]) return mid;

    return -1;
}