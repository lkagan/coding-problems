function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1

    while (left !== right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(area, max);
        height[left] < height[right] ? left++ : right--;

    }

    return max;
}