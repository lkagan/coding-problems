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
    }
];

describe('Gets range', () => {
    fixtures.forEach(fixture => {
        it ('Gets ' + JSON.stringify(fixture.output + ' for ' + JSON.stringify(fixture.nums)), () => {
            expect(searchRange(fixture.nums, fixture.target)).toEqual(fixture.output);
        })
    })
})