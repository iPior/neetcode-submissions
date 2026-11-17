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
     * @return {boolean}
     */
    hasCycle(head) {
        // slow that keeps track of what it visited
        // fast to itterate through
        // hash map to keep track
        const visitedHash = new Set();
        let curr = head

        while(curr){
            if (!visitedHash.has(curr)) visitedHash.add(curr)
            else {
                return true
            }
            curr = curr.next
        }
        return false
        
    }
}
