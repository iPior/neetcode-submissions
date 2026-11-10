class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = /[a-zA-Z0-9]/;

        let left = 0
        let right = s.length - 1

        while (left < right) {

            if (!isAlphanumeric.test(s[left])){
                left++;
                continue
            } else if (!isAlphanumeric.test(s[right])){
                right--;
                continue
            }
            
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
            else {
                left++;
                right--;
            } 

        }
        return true

    }
}