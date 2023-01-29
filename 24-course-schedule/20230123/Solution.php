<?php

declare(strict_types=1);

class Solution
{
    protected int $numCourses;
    protected array $preReqs;
    protected array $seen;

    public function canFinish(int $numCourses, array $preReqs): bool
    {
        $this->numCourses = $numCourses;
        $this->preReqs = $preReqs;
        $adjList = $this->getAdjList();

        foreach ($adjList as $courseId => $coursePreReqs) {
            $this->seen = [];
            $stack = $coursePreReqs;
            if (!$coursePreReqs) continue;

            while ($stack) {
                $preReq = array_pop($stack);
                if ($preReq === $courseId) return false;
                if ($this->hasSeen($preReq)) continue;
                $this->setSeen($preReq);
                array_push($stack, ...$adjList[$preReq]);
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

    protected function hasSeen(mixed $key): bool
    {
        return array_key_exists(key: serialize($key), array: $this->seen);
    }

    protected function setSeen(mixed $key): array
    {
        $this->seen[serialize($key)] = true;
        return $this->seen;
    }
}