function mergeSort(nums) {
    if (nums.length === 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const merged = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            merged.push(left[leftIdx++]);
        } else {
            merged.push(right[rightIdx++]);
        }
    }

    // Append any remaining values from left or right to merged.
    return merged
        .concat(left.slice(leftIdx))
        .concat(right.slice(rightIdx));
}

// const numbers = [3,8,1,3,3,5,7,1,2,6,2,7,0,1];
const numbers = [2,1,4,3];
console.log(mergeSort(numbers));