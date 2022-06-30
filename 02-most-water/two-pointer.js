const findMaxArea = (nums) => {
    let maxArea = 0;
    let p1 = 0;
    let p2 = nums.length - 1;
    let width = p2 - p1;

    while (width > 0) {
        const area = width * Math.min(nums[p1], nums[p2]);
        maxArea = Math.max(maxArea, area);
        nums[p1] < nums[p2] ? ++p1 : ++p2;
        --width;
    }

    return maxArea;
}

console.log(findMaxArea([5,3,2,8,7]));
console.log(findMaxArea([5]));
console.log(findMaxArea([]));
