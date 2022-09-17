const { trap: trap2 } = require('./20220917.ts');

test('Finds correct trapped water', () => {
    expect(trap2([0,1,0,2])).toBe(1);
})