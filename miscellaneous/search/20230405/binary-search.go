package main

func binarySearch(values []int, target int, start int, end int) int {
	mid := start + end - start/2

	if target < values[mid] {
		return binarySearch(values, target, start, mid-1)
	}

	if target > values[mid] {
		return binarySearch(values, target, mid+1, end)
	}

	if values[mid] == target {
		return mid
	}

	return -1
}

func main() {
	if binarySearch([]int{1, 2, 3, 4, 5}, 3, 0, 4) == 2 {
		println("Pass")
	} else {
		println("Fail")
	}
}
