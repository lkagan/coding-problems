from typing import List


class Solution:
    def numOfMinutes(
            self,
            n: int,
            headID: int,
            manager: List[int],
            informTime: List[int]
    ) -> int:
        adj_list = self.get_adj_list(manager)
        return self.get_time(headID, adj_list, informTime)


    def get_adj_list(self, managers: List[int]) -> List[List[int]]:
        adjList = [[] for i in managers]

        for i in range(len(managers)):
            if managers[i] == -1:
                continue

            adjList[managers[i]].append(i)

        return adjList


    def get_time(
            self,
            emp_id: int,
            adj_list: List[List[int]],
            inform_time: List[int]
    ) -> int:
        max_time = 0

        for report in adj_list[emp_id]:
            max_time = max(max_time, self.get_time(report, adj_list, inform_time))

        return max_time + inform_time[emp_id]