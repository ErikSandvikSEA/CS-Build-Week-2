def mergeTwoLists(h1, h2):
    if not h1 or not h2:
        return h1 or h2
    p1 = h1
    prev = None
    p2 = h2
    while p1 and p2:
        if p1.val <= p2.val:
            prev = p1
            p1 = p1.next
        else:
            if prev:
                prev.next = p2
            prev = p2
            p2 = p2.next
            prev.next = p1
    if not p1:
        prev.next = p2
    if h1.val <= h2.val:
        return h1
    else:
        return h2
