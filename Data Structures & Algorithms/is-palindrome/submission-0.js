class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        // first we normalize the string
        // then we we start outward and compare first and last elements
        // if even we go split n/2, if odd we split n - 1 / 2

        const str = s.toLowerCase();
        const alphanumericOnly = str.replace(/[^a-z0-9]/gi, "");
        const len = alphanumericOnly.length
        const letters = alphanumericOnly.split("")
        console.log(alphanumericOnly,letters, len)

        for (let i = 0; i < Math.floor(len/2); i++){
            
            if (letters[i] !== letters[len-1-i]){
                return false;
            }
        }

        return true;
    }
}
