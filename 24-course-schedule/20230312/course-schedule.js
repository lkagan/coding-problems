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

    // Create a stack of vertexes with indegree zero
    const noPreReqs = [];
    indegree.forEach((count, course) => count === 0 && noPreReqs.push(course));

    let sortedCount = 0;

    while (noPreReqs.length) {
        const zeroIndegreeCourse = noPreReqs.pop();
        const dependants = adjList[zeroIndegreeCourse];
        sortedCount++;

        // Decrement the number of indegrees for each dependant
        for (const dependant of dependants) {
            if (--indegree[dependant] === 0) {
                noPreReqs.push(dependant);
            }
        }
    }

    return sortedCount === numCourses;
}


module.exports = canFinish;