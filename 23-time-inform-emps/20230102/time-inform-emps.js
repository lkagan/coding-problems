'use strict';

function numOfMinutes(n, id, managers, informTime) {
    const adjList = getAdjList(managers);
    return getTime(id, adjList, informTime);
}

function getTime(empId, adjList, informTime) {
    let maxTime = 0;
    const myTime = informTime[empId];

    for (let report of adjList[empId]) {
        maxTime = Math.max(maxTime, getTime(report, adjList, informTime));
    }

    return maxTime + myTime;
}

function getAdjList(managers) {
    const adjList = [];

    for (let i = 0; i < managers.length; ++i) {
        adjList[i] = [];
    }

    managers.forEach((mgrId, empId) => {
        mgrId !== -1 && adjList[mgrId].push(empId);
    })

    return adjList;
}

module.exports = numOfMinutes;