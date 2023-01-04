'use strict';

/**
 *
 * @param n
 * @param id
 * @param managers number[]
 * @param informTime number[]
 * @returns {*}
 */
function numOfMinutes(n, id, managers, informTime) {
    let maxChildTime = 0;
    let empId = managers.indexOf(id);

    while (empId !== -1) {
        maxChildTime = Math.max(
            maxChildTime,
            numOfMinutes(n, empId, managers, informTime)
        );

        empId = managers.indexOf(id, empId + 1);
    }

    return maxChildTime + informTime[id];
}

module.exports = numOfMinutes;