class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // Charcodeat
        const output = new Map();

        for(let str of strs){
            let count = new Array(26).fill(0)
            for(let char of str){
                count[char.charCodeAt() - 'a'.charCodeAt()]++;
            }
            let key = count.join(',')

            if(!output.has(key)){
                output.set(key,[str])
            }
            else {
                output.get(key).push(str)
            }
        }
        return Array.from(output.values());
    }
}
