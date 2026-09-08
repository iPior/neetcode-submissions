class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = [];
        const map = new Map();

        for(let str of strs){
            let normalizedStr = str.split('').sort().join('')
            if(!map.has(normalizedStr)){
                map.set(normalizedStr,[str])
            }
            else {
                map.set(normalizedStr,[...map.get(normalizedStr),str])
            }
        }
        return Array.from(map.values())
    }
}
