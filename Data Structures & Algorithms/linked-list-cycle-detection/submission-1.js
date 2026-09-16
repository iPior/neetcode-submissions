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
        // naive approch is to itteratea through the list and if a node has been seen 
        // add it to a hash map persay. on every itteration check if that node already exists, 
        // if it does we know there is a cycle

    hasCycle(head) {
        const set = new Set();

        let curr = head
        while(curr){
            if(!set.has(curr)) set.add(curr);
            else return true;
            curr = curr.next
        }
        return false
    }
}
