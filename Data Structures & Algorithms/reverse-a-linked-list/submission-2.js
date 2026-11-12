/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */

    /*
     * only care about the pointers here and not the values  
     */
    reverseList(head) {
        let cur = head
        let prev = null
        
        while(cur){                 // while theres a node
            let next = cur.next     // capture next with a temp var
            cur.next = prev         // flip the direction
            prev = cur              // shift prev up one
            cur = next              // iterate
        }
        return prev                 // return prev because its the reversed ll
    }
}
