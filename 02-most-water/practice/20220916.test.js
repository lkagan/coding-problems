const maxArea = require('./20220916');

test ('Calculates max area', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
})