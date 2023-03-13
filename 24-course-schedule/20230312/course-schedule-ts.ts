function canFinish(numCourses: number, prerequisites: Array<Array<number>>): boolean {
    // Create an indegree list
    const indegree = Array(numCourses).fill(0);
    const adjList: Array<Array<number>> = indegree.map(() => []);

    for (const [course, prereq] of prerequisites) {
        ++indegree[course];
        adjList[prereq].push(course);
    }

    const zeroStack: Array<number> = [];
    let sortedCount = 0;

    for (let i = 0; i < indegree.length; ++i) {
        indegree[i] === 0 && zeroStack.push(i);
    }

    while (zeroStack.length) {
        const current = zeroStack.pop() as number;
        sortedCount++;

        for (const connection of adjList[current]) {
            --indegree[connection] === 0 && zeroStack.push(+connection);
        }
    }

    return sortedCount === numCourses;
}

export default canFinish;