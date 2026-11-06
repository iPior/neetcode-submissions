class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mapS = new Map();
        for (let item of s){
            if (mapS.has(item)) {
                mapS.set(item, mapS.get(item) + 1)
            }
            else {
                mapS.set(item, 1)
            }
        }

        const mapT = new Map();
        for (let item of t){
            if (mapT.has(item)) {
                mapT.set(item, mapT.get(item) + 1)
            }
            else {
                mapT.set(item, 1)
            }
        }

        if (mapS.size != mapT.size){
            return false
        }

        for (const [key,value] of mapS){
            if (mapT.has(key) && mapT.get(key) == value){
                continue
            }
            else {
                return false
            }
        }
        return true


    }
}
