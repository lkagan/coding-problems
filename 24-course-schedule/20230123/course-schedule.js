'use strict';

const canFinish = function(numCourses, prerequisites) {
    const adjList = getAdjList(numCourses, prerequisites);

    for (let vertex = 0; vertex < numCourses; vertex++) {
        const connections = adjList[vertex];
        if (connections.length === 0) continue;
        const queue = [...connections];
        const seen = new Set();

        while (queue.length) {
            const current = queue.shift();
            if (current === vertex) return false;
            seen.add(current);

            adjList[current].forEach(connection => {
                !seen.has(connection) && queue.push(connection);
            })
        }
    }

    return true;
}

function getAdjList(numCourses, prerequisites) {
    const adjList = [...Array(numCourses)].map(() => []);

    for (const [prereq, courseId] of prerequisites) {
        adjList[prereq].push(courseId);
    }

    return adjList;
}

module.exports = canFinish;
