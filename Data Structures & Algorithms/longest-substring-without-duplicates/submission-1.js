class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const string = s.split('');
        let left = 0
        let max = 0
        let set = new Set();

        for(let right=0;right<string.length;right++){

            while(set.has(string[right])){
                set.delete(string[left])    
                left++                
            }
            set.add(string[right])

            let length = set.size
            if(length>max) max=length;
        
        }
        return max;
    }
}
