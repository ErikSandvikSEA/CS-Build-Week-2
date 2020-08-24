# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, node1: ListNode, node2: ListNode) -> ListNode:
        dummy = ListNode(0)
        head = dummy
        carry = sum = 0
        while node1 or node2 or sum > 0:
            if node1:
                sum += node1.val
                node1 = node1.next
            if node2:
                sum += node2.val
                node2 = node2.next
            if sum >= 10:
                carry = 1
                sum -= 10
            head.next = ListNode(sum)
            head = head.next
            sum = carry
            carry = 0
        return dummy.next
