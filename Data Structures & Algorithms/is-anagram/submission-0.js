class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const word1 = s.split('').sort();
        const word2 = t.split('').sort()
        for (let i=0;i<=s.length+t.length-2;i++){
            if (word1[i] != word2[i]){
                return false
            }
        }
        return true
    }
}
