function trap (heights: number[]): number {
    let maxLeft = 0;
    let maxRight = 0;
    let left = 0;
    let right = heights.length - 1;
    let total = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
           if (heights[left] >= maxLeft) {
               maxLeft = heights[left];
           }  else {
               total += (maxLeft - heights[left]);
           }

           ++left;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                total += (maxRight - heights[right]);
            }

            --right;
        }
    }

    return total;
}