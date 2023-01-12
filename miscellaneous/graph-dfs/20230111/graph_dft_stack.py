from typing import List


class GraphDft:
    def graph_dft(self, graph: List[List[int]]) -> List[int]:
        queue = [0]
        values: List[int] = []

        while (len(queue)):
            vertex = queue.pop()
            values.append(vertex)

            for connection in graph[vertex]:
                if connection not in values:
                    queue.append(connection)

        return values
