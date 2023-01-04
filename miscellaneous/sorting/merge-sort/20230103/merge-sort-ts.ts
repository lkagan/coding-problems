export const mergeSort = (nums: Array<number>): Array<number> => {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);

    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
}

function merge(left: Array<number>, right: Array<number>): Array<number> {
    const merged = [] as Array<number>;

    while (left.length && right.length) {
        merged.push(left[0] < right[0] ? left.shift()! : right.shift()!);
    }

    return [...merged, ...left, ...right];
}
