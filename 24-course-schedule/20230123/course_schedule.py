from typing import List, Set


class Solution:
    prereqs: List[List[int]]
    num_courses: int

    def canFinish(self, num_courses: int, prereqs: List[List[int]]) -> bool:
        self.prereqs = prereqs
        self.num_courses = num_courses
        adj_list: List[List[int]] = self.get_adj_list()

        for course_id in range(num_courses):
            if not adj_list[course_id]:
                continue

            queue: List[int] = adj_list[course_id]
            seen: Set[int] = set()

            while queue:
                prereq_id = queue.pop(0)

                if prereq_id == course_id:
                    return False

                for connection in adj_list[prereq_id]:
                    if connection not in seen:
                        queue.append(connection)
                        seen.add(connection)

        return True

    def get_adj_list(self) -> List[List[int]]:
        adj_list = [[] for i in range(self.num_courses)]

        for courseId, prereq in self.prereqs:
            adj_list[courseId].append(prereq)

        return adj_list
