"use strict";

const GATE = 0;
const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

function wallsAndGates(rooms) {
    for (let i = 0; i < rooms.length; ++i) {
        for (let j = 0; j < rooms[0].length; ++j) {
            if (rooms[i][j] === GATE) {
                dfs(rooms, i, j, 0);
            }
        }
    }

    return rooms;
}

function dfs(rooms, row, col, step) {
    if (!inBounds(row, col, rooms) || (step && step >= rooms[row][col])) {
        return;
    }

    rooms[row][col] = step;

    for (const DIR of DIRECTIONS) {
        const [newRow, newCol] = [row + DIR[0], col + DIR[1]];
        dfs(rooms, newRow, newCol, step + 1);
    }
}

function inBounds(row, col, grid) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

module.exports = wallsAndGates;
