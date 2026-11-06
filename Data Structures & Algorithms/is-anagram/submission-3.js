class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const string1 = s.split('').sort().join('')
        const string2 = t.split('').sort().join('')
        
        if (s.length != t.length){
            return false
        }

        for (let i=0; i<s.length;i++){
            if (string1[i] != string2[i]){
                return false
            }
        }

        return true


    }
}
