'use strict';

const canFinish = function(numCourses, prerequisites) {
    // Build empty indegree list and adjacency list
    const indegree = [];
    const adjList = [];

    for (let i = 0; i < numCourses; ++i) {
        indegree[i] = 0;
        adjList[i] = [];
    }

    // Populate lists based on prerequisites array
    for (const [course, prereq] of prerequisites) {
        indegree[course]++;
        adjList[prereq].push(course);
    }

    const sorted = [];

    while (hasZeroIndegrees(indegree)) {
        for (const [course, count] of indegree.entries()) {
            if (count === 0) {
                sorted.push(course);
                delete indegree[course];

                for (const dependant of adjList[course]) {
                    indegree[dependant]--;
                }
            }
        }
    }

    return sorted.length === numCourses;
}

function hasZeroIndegrees(indegreeList) {
    for (const indegrees of indegreeList) {
        if (indegrees === 0) {
            return true
        }
    }

    return false;
}

module.exports = canFinish;