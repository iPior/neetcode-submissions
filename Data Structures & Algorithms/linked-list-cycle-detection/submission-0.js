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
        // naive approch is to itteratea through the list and if a node has been seen add it to a hash map persay. on every itteration check if that node already exists, if it does we know there is a cycle
    hasCycle(head) {
        const map = new Map();

        let curr = head
        while(curr){
            // add node to the map if it doesnt exist
            // if it exists we know
            if(!map.has(curr)) map.set(curr,true);
            else return true;
            curr = curr.next
        }
        return false
    }
}
