'use strict';

function numOfMinutes(n, id, managers, informTime) {
    const myTime = informTime.indexOf(id);
    let maxChildTime = 0;
    let empId = managers.indexOf(id);

    while (empId !== -1) {
        maxChildTime = Math.max(
            maxChildTime,
            numOfMinutes(n, empId, managers, informTime)
        );

        empId = managers.indexOf(id, empId + 1);
    }

    return maxChildTime + myTime;
}

module.exports = numOfMinutes;