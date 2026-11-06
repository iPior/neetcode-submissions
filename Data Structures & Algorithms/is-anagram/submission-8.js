class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freq = new Map();
        if (s.length != t.length) return false;

        for (let item of s){
            if (freq.has(item)) freq.set(item, freq.get(item) + 1)
            else {
                freq.set(item, 1)
            }
        }

        for (let item of t){
            if (freq.has(item)) freq.set(item, freq.get(item) - 1)
            else {
                freq.set(item, -1)
            }
        }

        for (const value of freq.values()){
            if (value != 0) return false
        }

        return true
    }
}