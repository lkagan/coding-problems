from typing import List
from course_schedule import Solution


def test_course_schedule():
    data_sets = ((5, [[1, 4], [2, 4], [3, 1], [3, 2]], True),)

    for data in data_sets:
        num_courses, prerequisites, result = data
        assert Solution().canFinish(num_courses, prerequisites) == result
