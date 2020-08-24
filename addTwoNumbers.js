
//  * Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

function addTwoNumbers(node1, node2) {
   let dummy = new ListNode(0)
   let head = dummy
   let sum = 0
   let carry = 0
   while(node1 || node2 || sum > 0){
       if(node1){
           sum += node1.val
           node1 = node1.next
       }
       if(node2){
           sum += node2.val
           node2 = node2.next
       }
       if(sum >= 10){
           carry = 1
           sum -= 10
       }
       head.next = new ListNode(sum)
       head = head.next
       sum = carry
       carry = 0
   }
   return dummy.next
}


