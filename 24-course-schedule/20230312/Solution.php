<?php

declare(strict_types=1);

class Solution
{
    public function canFinish(int $numCourses, array $prerequisites): bool
    {
        $adjList = array_fill(start_index: 0, count: $numCourses, value: []);
        $indegree = array_fill(start_index: 0, count: $numCourses, value: 0);

        foreach ($prerequisites as [$courseId, $prereq]) {
            $indegree[$courseId]++;
            $adjList[$prereq][] = $courseId;
        }

        $sortedCount = 0;
        $zeroStack = [];

        for ($courseId = 0; $courseId < count($indegree); ++$courseId) {
            $indegree[$courseId] === 0 && $zeroStack[] = $courseId;
        }

        while (count($zeroStack)) {
            $current = array_pop($zeroStack);
            $sortedCount++;
            unset($indegree[$current]);
            $connections = $adjList[$current];

            foreach ($connections as $connection) {
                --$indegree[$connection];

                if ($indegree[$connection] === 0) {
                    $zeroStack[] = $connection;
                }
            }
        }

        return $numCourses === $sortedCount;
    }
}