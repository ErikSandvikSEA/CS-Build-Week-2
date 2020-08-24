class Solution:
    # O(n) time, O(n) space
    def containsDuplicate1(self, nums: List[int]) -> bool:
        catalog = {}
        for i in range(len(nums)):
            if nums[i] in catalog:
                return True
            else:
                catalog[nums[i]] = True
        return False

    # O(n logn) time, O(1) space
    def containsDuplicate2(self, nums):
        nums.sort()
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1]:
                return True
        return False

