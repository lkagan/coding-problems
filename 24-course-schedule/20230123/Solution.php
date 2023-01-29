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

        foreach ($adjList as $courseId => $coursePreReqs) {
            $stack = $coursePreReqs;
            $seen = [];

            while ($stack) {
                $current = array_pop($stack);
                if ($current === $courseId) return false;

                if (!$this->hasSeen(key: $current, seen: $seen)) {
                    $this->setSeen($current, $seen);

                    if (! $adjList[$current]) {
                        continue;
                    }

                    $stack += array_filter(
                        array: $adjList[$current],
                        callback: fn($connection) => !$this->hasSeen($connection, $seen)
                    );
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

    protected function hasSeen (mixed $key, array $seen): bool
    {
        return array_key_exists(key: serialize($key), array: $seen);
    }

    protected function setSeen (mixed $key, array $seen): array
    {
        $seen[serialize($key)] = true;
        return $seen;
    }
}