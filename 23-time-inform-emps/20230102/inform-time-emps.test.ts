import numOfMinutes from './inform-time-emps-ts'

const managers = [1,2,-1,1,0];
const informTime = [5,1,3,0,0];
const headId = 2;
const n = managers.length;
const solution = 9;

it('numOfMinutes()', () => {
    expect(numOfMinutes(n, headId, managers, informTime)).toEqual(solution);
})