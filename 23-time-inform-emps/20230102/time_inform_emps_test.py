from time_inform_emps import Solution

managers = [1,2,-1,1,0]
inform_time = [5, 1, 3, 0, 0]
head_id = 2
n = len(managers)
expected = 9


def test_time_inform_emps():
    assert Solution().numOfMinutes(n, head_id, managers, inform_time) == expected