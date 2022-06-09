const twoSum = (nums, target) => {
    if (nums.length < 2) {
        return null;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        let secondNum = target - nums[ i ];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[ j ] == secondNum) {
                return [ i, j ];
            }
        }
    }
}

console.log(twoSum([ 2, 7, 11, 15 ], 9)); // [0, 1]
console.log(twoSum([ 3, 2, 4 ], 6)); // [1, 2]
console.log(twoSum([ 3, 3 ], 6)); // [1, 2]