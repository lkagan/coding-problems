export default (
    n: number,
    headId: number,
    managers: number[],
    informTime: number[]
): number => {
    const adjList = getAdjList(managers);
    return dfs(headId, adjList, informTime);
}

function getAdjList(managers: Array<number>): Array<Array<number>> {
    const list = [...Array(managers.length)].map(() => Array()) as number[][];

    managers.forEach((mgrId, empId) => {
        mgrId !== -1 && list[mgrId].push(empId);
    });

    return list;
}

function dfs(empId: number, adjList: number[][], informTime: number[]): number {
    let maxTime = 0;

    adjList[empId].forEach(report => {
        maxTime = Math.max(maxTime, dfs(report, adjList, informTime));
    });

    return maxTime + informTime[empId];
}