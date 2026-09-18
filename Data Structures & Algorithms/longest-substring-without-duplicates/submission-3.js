class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0 //index of the left of the sliding window
        let maxLength = 0; //our answer
        let set = new Set() //our sliding window

        for (let right=0;right<s.length;right++){

            //clean the set until no more duplicates
            while(set.has(s[right])){
                set.delete(s[left]) //this is the action that removes until the window is unique
                left++
            }
            set.add(s[right]) //extend the window to the right because this is now a new char

            //once back to being unique compare if this window size is new max
            let length = set.size
            if(length > maxLength) maxLength = length;

        }

        return maxLength;
    }
}
