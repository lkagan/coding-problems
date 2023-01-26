from course_schedule import Solution
from typing import List


class TestData:
    num_courses: int
    prereqs: List[List[int]]
    result: bool

    def __init__(self, num_courses: int, prereqs: List[List[int]], result: bool):
        self.num_courses = num_courses
        self.prereqs = prereqs
        self.result = result


test_data = [
    TestData(6, [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]], True),
    TestData(2, [[1, 0], [0, 1]], False),
]

def test_can_finish():
    for data in test_data:
        assert Solution().canFinish(data.num_courses, data.prereqs) == data.result

