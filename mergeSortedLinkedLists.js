var mergeTwoLists = function(h1, h2) {
    if(!h1 || !h2){
        return h1 || h2
    }
    let p1 = h1
    let p1Prev = null
    let p2 = h2
    while(p1 && p2){
        if(p1.val < p2.val){
            p1Prev = p1
            p1 = p1.next
        } else {
            if(p1Prev){
                p1Prev.next = p2
            }
            p1Prev = p2
            p2 = p2.next
            p1Prev.next = p1
        }
    }
    if(!p1){
        p1Prev.next = p2
    }
    if(h1.val < h2.val){
        return h1
    } else {
        return h2
    }
};