function mergeSort (nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor (nums.length / 2);
    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
}

function merge(left: number[], right: number[]): number[] {
    const results: number[] = [];

    while(left.length && right.length) {
        if (left[0] > right[0]) {
            results.push(right.shift()!);
        } else {
            results.push(left.shift()!);
        }
    }

    return [...results, ...left, ...right];
}

export default mergeSort;