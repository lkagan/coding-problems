const binarySearch = require("./binary-search");

const nums = [2, 5, 99, 128, 167, 2000, 45000];
const target = 167;

it(`Finds index of target ${target}`, () => {
    expect(binarySearch(nums, target)).toEqual(nums.indexOf(target));
})
