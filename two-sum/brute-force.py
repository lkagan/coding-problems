def find_two_sum(nums, target):
    if len(nums) < 2:
        return None

    for i in range(len(nums) - 1):
        secondNum = target - nums[i]
        for j in range(i + 1, len(nums)):
            if nums[j] == secondNum:
                return [i, j]

    return None


print(find_two_sum([ 2, 7, 11, 15 ], 9)) # [0, 1]
print(find_two_sum([ 3, 2, 4 ], 6)) # [1, 2]
print(find_two_sum([ 3, 3 ], 6)) # [0, 1]