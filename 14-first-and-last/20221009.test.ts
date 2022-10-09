import searchRange from './20221009';

class Fixture {
    constructor(
        public nums: number[],
        public target: number,
        public output: [number, number]
    ) {};
}


const fixtures = [
    new Fixture([5,7,7,8,8,10], 8, [3,4]),
    new Fixture([5,7,7,8,8,10], 6, [-1,-1]),
    new Fixture([], 0, [-1,-1]),
    new Fixture([1], 0, [-1,-1]),
    new Fixture([1], 1, [0,0]),
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