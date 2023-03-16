from typing import List


class Solution:
    def canFinish(self, num_courses: int,
                  prerequisites: List[List[int]]) -> bool:
        adj_list = [[] for i in range(num_courses)]
        indegree = [0 for i in range(num_courses)]
        zero_stack = []
        sort_count = 0

        for course, prereq in prerequisites:
            indegree[course] += 1
            adj_list[prereq].append(course)

        for course in range(len(indegree)):
            if indegree[course] == 0:
                zero_stack.append(course)

        while zero_stack:
            current = zero_stack.pop()
            sort_count += 1
            connections = adj_list[current]

            for connection in connections:
                indegree[connection] -= 1

                if indegree[connection] == 0:
                    zero_stack.append(connection)

        return sort_count == num_courses
