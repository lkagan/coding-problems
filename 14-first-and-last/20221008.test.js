const searchRange = require('./20221008');

const fixtures = [
    {
        nums: [5,7,7,8,8,10],
        target: 8,
        output: [3,4]
    },
    {
        nums: [5,7,7,8,8,10],
        target: 6,
        output: [-1,-1]
    },
    {
        nums: [],
        target: 0,
        output: [-1,-1]
    },
    {
        nums: [1],
        target: 0,
        output: [-1,-1]
    },
    {
        nums: [1],
        target: 1,
        output: [0,0]
    },

];

describe('Gets range', () => {
    fixtures.forEach(fixture => {
        const desc = `Finds ${fixture.target} at `
            + JSON.stringify(fixture.output) + ' for '
            + JSON.stringify(fixture.nums);

        it (desc, () => {
            expect(searchRange(fixture.nums, fixture.target)).toEqual(fixture.output);
        })
    })
})