<?php

declare(strict_types=1);

class Solution
{
    public function numOfMinutes(
        int $n,
        int $headId,
        array &$managers,
        array &$informTime
    ): int {
        $adjList = $this->getAdjList(managers: $managers);

        return $this->maxChildrenTime(
            curEmpId: $headId,
            adjList: $adjList,
            informTime: $informTime
        );
    }

    protected function getAdjList(array &$managers): array
    {
        $adjList = array_fill(start_index: 0, count: count($managers), value: []);

        for ($empId = 0; $empId < count($managers); ++$empId) {
            $managers[$empId] !== -1 && $adjList[$managers[$empId]][] = $empId;
        }

        return $adjList;
    }

    protected function maxChildrenTime(
        int $curEmpId,
        array &$adjList,
        array &$informTime
    ): int {
        $maxTime = 0;

        foreach ($adjList[$curEmpId] as $nextEmpId) {
            $maxChildTime = $this->maxChildrenTime(
                curEmpId: $nextEmpId,
                adjList: $adjList,
                informTime: $informTime
            );

            $maxTime = max($maxTime, $maxChildTime + $informTime[$curEmpId]);
        }

        return $maxTime;
    }
}