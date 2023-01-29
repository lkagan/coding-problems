<?php

declare(strict_types=1);

class Solution
{
    protected int $numCourses;
    protected array $preReqs;

    public function canFinish(int $numCourses, array $preReqs): bool
    {
        $this->numCourses = $numCourses;
        $this->preReqs = $preReqs;
        $adjList = $this->getAdjList();

       for ($courseId = 0; $courseId < count($adjList); ++$courseId) {
            if (count($adjList[$courseId]) === 0) {
                continue;
            }

            $seen = [];
            $stack = $adjList[$courseId];

            while ($stack) {
                $preReq = array_pop($stack);

                if ($courseId === $preReq) return false;

                foreach ($adjList[$courseId] as $connection)
                    if (! array_key_exists(key: serialize($connection), array: $seen)) {
                        $seen[serialize($connection)] = true;
                        $stack[] = $connection;
                }
            }
        }

        return true;
    }

    protected function getAdjList(): array
    {
        $adjList = array_fill(start_index: 0, count: $this->numCourses, value: []);

        foreach ($this->preReqs as [$courseId, $preReqId]) {
            $adjList[$courseId][] = $preReqId;
        }

        return $adjList;
    }
}