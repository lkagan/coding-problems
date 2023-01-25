export default (numCourses: number, prereqs: number[][]): boolean => {
    const adjList = getAdjList(numCourses, prereqs);

    for (let courseId = 0; courseId < numCourses; ++courseId) {
        const queue: Array<number> = [...adjList[courseId]];
        const seen: Set<number> = new Set();

        while (queue.length) {
            const prereq = queue.shift() as number;
            if (prereq === courseId) return false;

            if (!seen.has(prereq)) {
                seen.add(prereq);
                queue.push(...adjList[prereq].filter(connection => !seen.has(connection)));
            }
        }
    }

    return true;
}

const getAdjList = function(numCourses: number, prereqs: number[][]): Array<Array<number>> {
    const adjList = [...Array(numCourses)].map(() => [] as number[]);

    for (const [courseId, prereqId] of prereqs) {
        adjList[courseId].push(prereqId);
    }

    return adjList;
}