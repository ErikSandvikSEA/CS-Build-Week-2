def isPalindrome(head):
    if not head:
        return True
    firstHalfEnd = findHalfwayMark(head)
    secondHalfStart = reverse(firstHalfEnd.next)
    p1 = head
    p2 = secondHalfStart
    while p2:
        if p1.val != p2.val:
            return False
        p1 = p1.next
        p2 = p2.next
    return True


def reverse(head):
    p1 = None
    p2 = head
    while p2:
        p3 = p2.next
        p2.next = p1
        p1 = p2
        p2 = p3
    return p1


def findHalfwayMark(head):
    p1 = head
    p2 = head
    while p2.next and p2.next.next:
        p2 = p2.next.next
        p1 = p1.next
    return p1
