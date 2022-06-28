def find_two_sum(nums, target):
    seen = {}

    for i in range(len(nums)):
        missing = target - nums[i]

        if missing in seen:
            return [seen[missing], i]

        seen[nums[i]] = i

    return None

print(find_two_sum([ 2, 7, 11, 15 ], 9)) # [0, 1]
print(find_two_sum([ 3, 2, 4 ], 6)) # [1, 2]
print(find_two_sum([ 3, 3 ], 6)) # [0, 1]