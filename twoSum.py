class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        catalog = {}
        for i in range(len(nums)):
            potential_match = target - nums[i]
            if potential_match in catalog:
                return [nums.index(potential_match), i]
            else:
                catalog[nums[i]] = True

