import binarySearch from "./binary-search-ts";

const nums = [2, 5, 99, 128, 167, 2000, 45000];
const target = 167;

it(`Gets index of ${target}`, () => {
    expect(binarySearch(nums, target)).toEqual(nums.indexOf(target));
})