function isPalindrome(head){
    if(!head){
        return true
    }
    //find halfway mark and reverse the second half
    const firstHalfEnd = findHalfwayMark(head)
    const secondHalfStart = reverse(firstHalfEnd.next)
    
    //check whether or not it's a palindrome
    let p1 = head
    let p2 = secondHalfStart
    while(p2){
        if(p1.val !== p2.val){
            return false
        }
        p1 = p1.next
        p2 = p2.next
    }
    return true
}

function findHalfwayMark(head){
    let p1 = head
    let p2 = head
    while(p2.next && p2.next.next){
        p2=p2.next.next
        p1=p1.next
    }
    return p1
}

function reverse(head){
    let p1 = null
    let p2 = head
    while(p2){
        let p3 = p2.next
        p2.next = p1
        p1 = p2
        p2 = p3
    }
    return p1
}
